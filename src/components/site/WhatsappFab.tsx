import { WHATSAPP_URL } from "@/lib/site";
import { WhatsappIcon } from "./WhatsappIcon";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo sobre a consultoria no WhatsApp"
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-0 rounded-full bg-primary p-3.5 text-primary-foreground shadow-[0_16px_40px_-12px_rgba(255,122,0,0.7)] transition-all duration-300 hover:bg-primary-glow sm:bottom-7 sm:right-7 sm:gap-2 sm:px-4"
    >
      <WhatsappIcon className="h-6 w-6 shrink-0" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 sm:inline-block sm:group-hover:max-w-[16rem] sm:group-hover:pr-1">
        Fale comigo sobre a consultoria
      </span>
    </a>
  );
}
