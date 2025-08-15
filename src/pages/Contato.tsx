import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";

export default function Contato() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Contato | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Fale com a BRGT: formulário, telefone, e-mail e WhatsApp." />
        <link rel="canonical" href="https://www.seudominio.com.br/contato" />
      </Helmet>

      <section className="container py-12">
        <RevealOnScroll>
          <h1 className="text-3xl font-semibold mb-6">Contato</h1>
        </RevealOnScroll>
        <div className="grid lg:grid-cols-2 gap-8">
          <RevealOnScroll>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Formulário de contato">
              <div>
                <label className="block text-sm mb-1" htmlFor="nome">Nome</label>
                <Input id="nome" placeholder="Seu nome" required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">E-mail</label>
                <Input id="email" type="email" placeholder="Seu e-mail" required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="assunto">Assunto</label>
                <Input id="assunto" placeholder="Assunto" required />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="mensagem">Mensagem</label>
                <Textarea id="mensagem" placeholder="Como podemos elevar o nível da sua obra?" className="min-h-32" required />
              </div>
              <Button type="submit">Enviar</Button>
            </form>
          </RevealOnScroll>

          <div className="space-y-6">
            <RevealOnScroll>
              <div className="rounded-lg border border-border p-4">
                <h2 className="text-xl font-medium mb-2">Informações de contato</h2>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-center gap-2"><Phone className="text-primary" size={18}/> Telefone: +55 62 9607-0096</li>
                  <li className="flex items-center gap-2"><Mail className="text-primary" size={18}/> E-mail: brgt@brgt.com.br</li>
                </ul>
                <div className="flex items-center gap-4 mt-4">
                  <Button asChild>
                    <a href="https://wa.me/556296070096" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" size={18}/> WhatsApp</a>
                  </Button>
                  
                  <a 
                    href="https://www.instagram.com/brgt.estruturas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted-foreground hover:text-foreground transition-colors" 
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </a>
                  
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll>
              <div>
                <h2 className="text-xl font-medium mb-2">Localização</h2>
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    title="Mapa de localização BRGT"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.82073994132912!2d-49.270421067110576!3d-16.72027233909327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef0d9608b7bdb%3A0x4ee140a94fd0bb44!2sHirata%20e%20Associados%20Consultoria%20e%20Projetos%20Estruturais!5e0!3m2!1spt-BR!2sbr!4v1755204727291!5m2!1spt-BR!2sbr"
                    className="w-full h-full rounded-md border border-border"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </AspectRatio>
                <div className="mt-2">
                  <a href="https://maps.app.goo.gl/PzB6J5K9EAb6p3y28" target="_blank" rel="noopener noreferrer" className="underline">Abrir no Google Maps</a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}