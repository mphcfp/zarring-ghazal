"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { CRISP_WEBSITE_ID, isCrispConfigured } from "./crisp.config";

export interface CrispUser {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
}

interface CrispChatProps {
  /**
   * Optional authenticated user info. Safe to omit — Crisp works for
   * anonymous visitors out of the box. When provided, `id` is used as the
   * Crisp session-continuity token, and name/email/phone are pushed to the
   * visitor identity via the documented Crisp.user.* setters.
   */
  user?: CrispUser;
}

// Guards against calling Crisp.configure() more than once per page load
// (e.g. under React Strict Mode's double-invoked effects in development).
let hasConfigured = false;

export default function CrispChat({ user }: CrispChatProps) {
  useEffect(() => {
    if (!isCrispConfigured) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn(
          "[CrispChat] NEXT_PUBLIC_CRISP_WEBSITE_ID تنظیم نشده یا نامعتبر است. ویجت Crisp بارگذاری نمی‌شود."
        );
      }
      return;
    }

    if (!hasConfigured) {
      hasConfigured = true;
      // autoload: false lets us attach identity/session data before the
      // chatbox script actually loads, as recommended by Crisp's docs.
      Crisp.configure(CRISP_WEBSITE_ID, { autoload: false });
    }

    if (user?.id) {
      Crisp.setTokenId(user.id);
    }
    if (user?.email) {
      Crisp.user.setEmail(user.email);
    }
    if (user?.name) {
      Crisp.user.setNickname(user.name);
    }
    if (user?.phone) {
      Crisp.user.setPhone(user.phone);
    }

    Crisp.load();
    // We keep our own floating button as the entry point, so hide Crisp's
    // default launcher bubble right after loading.
    Crisp.chat.hide();
  }, [user?.id, user?.email, user?.name, user?.phone]);

  return null;
}
