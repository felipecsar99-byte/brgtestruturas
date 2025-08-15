import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const whatsappNumber = ""; // TODO: Preencha com DDI+DDD+Número, ex: "5551999999999"
const waLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "/contato";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 p-0 shadow-[var(--shadow-elevate)] hover-scale"
        aria-label="Abrir conversa no WhatsApp"
      >
        <a
          href={waLink}
          target={whatsappNumber ? "_blank" : undefined}
          rel={whatsappNumber ? "noopener noreferrer" : undefined}
          title="Fale conosco no WhatsApp"
        >
          <span className="sr-only">WhatsApp</span>
          <MessageCircle />
        </a>
      </Button>
    </div>
  );
}
