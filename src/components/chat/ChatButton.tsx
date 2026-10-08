"use client";

import { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";
import { MessageCircle, X } from "lucide-react";
import { isCrispConfigured } from "./crisp.config";

export default function ChatButton() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    if (!isCrispConfigured) return;

    const handleLoaded = () => setIsReady(true);
    const handleOpened = () => {
      setIsOpen(true);
      setUnreadCount(0);
    };
    const handleClosed = () => {
      setIsOpen(false);
      Crisp.chat.hide();
    };
    const handleMessageReceived = () => {
      setUnreadCount(Crisp.chat.unreadCount());
    };

    Crisp.session.onLoaded(handleLoaded);
    Crisp.chat.onChatOpened(handleOpened);
    Crisp.chat.onChatClosed(handleClosed);
    Crisp.message.onMessageReceived(handleMessageReceived);

    return () => {
      Crisp.session.offLoaded();
      Crisp.chat.offChatOpened();
      Crisp.chat.offChatClosed();
      Crisp.message.offMessageReceived();
    };
  }, []);

  const handleClick = () => {
    if (isOpen) {
      Crisp.chat.close();
      return;
    }
    Crisp.chat.show();
    Crisp.chat.open();
    Crisp.message.markAsRead();
  };

  if (!isCrispConfigured) {
    if (process.env.NODE_ENV === "production") return null;
    return (
      <div
        role="status"
        className="fixed bottom-5 right-5 z-50 max-w-xs rounded-xl border border-[var(--border)] bg-[var(--white)] px-4 py-3 text-xs text-[var(--muted)] shadow-lg sm:bottom-6 sm:right-6"
      >
        Crisp پیکربندی نشده است. مقدار NEXT_PUBLIC_CRISP_WEBSITE_ID را در .env.local تنظیم کنید.
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={!isReady}
      aria-label={isOpen ? "بستن گفتگوی پشتیبانی" : "باز کردن گفتگوی پشتیبانی"}
      aria-expanded={isOpen}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--gold-light)] shadow-lg shadow-[var(--navy)]/30 transition-all duration-200 hover:scale-105 hover:bg-[var(--deep)] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 rounded-full border border-[var(--gold)]/50" aria-hidden="true" />

      <MessageCircle
        className={`h-6 w-6 transition-all duration-200 ${isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-hidden="true"
      />
      <X
        className={`absolute h-6 w-6 transition-all duration-200 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        aria-hidden="true"
      />

      {!isOpen && unreadCount > 0 && (
        <span
          className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--gold)] px-1 text-[11px] font-semibold text-[var(--deep)]"
          aria-label={`${unreadCount} پیام خوانده‌نشده`}
        >
          {unreadCount > 9 ? "9+" : unreadCount}
        </span>
      )}
    </button>
  );
}
