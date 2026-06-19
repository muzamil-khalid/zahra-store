"use client";

import type { ReactNode } from "react";
import { waLink } from "@/lib/whatsapp";

// Opens WhatsApp with a prefilled message. Renders as a button styled like a link/btn.
export function WaButton({
  message, className, children,
}: { message: string; className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.open(waLink(message), "_blank", "noopener")}>
      {children}
    </button>
  );
}
