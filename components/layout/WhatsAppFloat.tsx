import { MessageCircleMore } from "lucide-react";
import { siteConfig } from "@/data/siteContent";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={siteConfig.whatsappUrl}
      aria-label={`Chat with Zelha on WhatsApp at ${siteConfig.whatsapp}`}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircleMore size={22} aria-hidden />
      <span>WhatsApp</span>
    </a>
  );
}