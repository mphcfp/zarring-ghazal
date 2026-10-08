"use client";

import Script from "next/script";
import { useEffect } from "react";
import { TAWK_EMBED_SRC, TAWK_EVENTS, isTawkConfigured } from "./chat.config";

interface TawkChatProps {
  /**
   * Visitor info known at page-load time (e.g. from your server session).
   * Per the official Tawk.to docs, the `visitor` object must be set BEFORE
   * the embed script downloads, so it is passed as a prop here and baked
   * into the init script rather than set later via an API call.
   */
  visitorName?: string;
  visitorEmail?: string;
}

function buildInitScript(visitorName?: string, visitorEmail?: string): string {
  const visitorFields: string[] = [];
  if (visitorName) visitorFields.push(`name: ${JSON.stringify(visitorName)}`);
  if (visitorEmail) visitorFields.push(`email: ${JSON.stringify(visitorEmail)}`);
  const visitorAssignment = visitorFields.length
    ? `Tawk_API.visitor = { ${visitorFields.join(", ")} };`
    : "";

  // This mirrors tawk.to's own embed snippet (var Tawk_API=Tawk_API||{}, ...
  // followed by inserting an async script tag) so behavior matches what
  // the dashboard gives you, just wired into React/Next.js.
  return `
    (function () {
      if (window.__TAWK_INITIALIZED__) return;
      window.__TAWK_INITIALIZED__ = true;

      var Tawk_API = window.Tawk_API || {};
      window.Tawk_API = Tawk_API;
      window.Tawk_LoadStart = new Date();

      ${visitorAssignment}

      Tawk_API.onLoad = function () {
        Tawk_API.hideWidget();
        window.dispatchEvent(new Event("${TAWK_EVENTS.ready}"));
      };
      Tawk_API.onChatMaximized = function () {
        window.dispatchEvent(new Event("${TAWK_EVENTS.maximized}"));
      };
      Tawk_API.onChatMinimized = function () {
        window.dispatchEvent(new Event("${TAWK_EVENTS.minimized}"));
      };
      Tawk_API.onChatMessageAgent = function () {
        window.dispatchEvent(new Event("${TAWK_EVENTS.agentMessage}"));
      };

      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "${TAWK_EMBED_SRC}";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s1.onerror = function () {
        window.dispatchEvent(new Event("${TAWK_EVENTS.error}"));
      };
      s0.parentNode.insertBefore(s1, s0);
    })();
  `;
}

export default function TawkChat({ visitorName, visitorEmail }: TawkChatProps) {
  useEffect(() => {
    const handleError = () => {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.error(
          "[TawkChat] بارگذاری اسکریپت tawk.to ناموفق بود (Ad-blocker یا مشکل شبکه). سایت به کار عادی ادامه می‌دهد."
        );
      }
    };
    window.addEventListener(TAWK_EVENTS.error, handleError);
    return () => window.removeEventListener(TAWK_EVENTS.error, handleError);
  }, []);

  if (!isTawkConfigured) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn(
        "[TawkChat] NEXT_PUBLIC_TAWK_PROPERTY_ID یا NEXT_PUBLIC_TAWK_WIDGET_ID تنظیم نشده یا نامعتبر است. ویجت بارگذاری نمی‌شود."
      );
    }
    return null;
  }

  return (
    <Script
      id="tawk-to-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: buildInitScript(visitorName, visitorEmail) }}
    />
  );
}
