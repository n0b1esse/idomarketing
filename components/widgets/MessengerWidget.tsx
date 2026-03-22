"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { MESSENGER_LINKS } from "@/lib/data/site";

export function MessengerWidget() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-8 sm:right-6">
      {expanded && (
        <div className="flex flex-col gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-2 shadow-xl">
          <a
            href={MESSENGER_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#25D366] px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            WhatsApp
          </a>
          <a
            href={MESSENGER_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[#229ED9] px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Telegram
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-primary)] text-[#0a0a0a] shadow-lg transition-transform hover:scale-105"
        aria-label={expanded ? "Закрыть мессенджеры" : "Открыть мессенджеры"}
        aria-expanded={expanded}
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
