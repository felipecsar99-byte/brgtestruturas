import { Helmet } from "react-helmet-async";
import { Building2 } from "lucide-react";

// ✅ 1. IMPORTANDO O HOOK useParallax
import { useParallax } from "@/hooks/use-parallax";
// --- IMPORTAÇÃO DOS COMPONENTES DE UI ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- DADOS DA PÁGINA ---
import { solucoes, desafios, consequencias, depoimentos } from "@/data/sitedata";

// IMPORTAÇÃO DAS IMAGENS DA PÁGINA
// ✅ A IMAGEM AGORA É IMPORTADA NO FORMATO .webp OTIMIZADO
import heroSobreNosImg from "@/assets/hero_sobrenos.jpg";
import FotoBRGT from "@/assets/Gemini_Generated_Image_g75esgg75esgg75e.png"

// --- COMPONENTE DA PÁGINA ---

export default function Sobre() {
  // ✅ 2. INICIALIZANDO O HOOK DO PARALLAX
  const bgRef = useParallax(0.3); // 30% da velocidade de rolagem

  return (
    <main>
      <Helmet>
        <title>Sobre nós | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Conheça a BRGT: formação, atuação e como ajudamos a construir estruturas seguras e eficientes." />
        <link rel="canonical" href="https://www.seudominio.com.br/sobre" />
      </Helmet>

      {/* --- Seção Hero (COM PARALLAX E OTIMIZAÇÃO DE IMAGEM) --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 pt-32 pb-16">
        {/* Camada de Fundo (Imagem e Overlay) */}
        <div 
          ref={bgRef} 
          className="absolute inset-0 -z-10 overflow-hidden"
        >
          <img 
            src={heroSobreNosImg} 
            alt="Ambiente de engenharia e arquitetura com projetos estruturais" 
            className="w-full h-full object-cover" 
            // ✅ ADICIONADO `loading="eager"` PARA CARREGAMENTO PRIORITÁRIO
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* O card agora é posicionado pelo container flex */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-background rounded-lg shadow-xl p-6 pt-12 md:p-8 md:pt-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#f16136] rounded-md shadow-lg p-3 w-20 h-20 md:w-24 md:h-24 grid place-content-center">
                <Building2 className="w-8 h-8 md:w-10 md-h-10 text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">Sobre Nós</h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Desde 2018, a BRGT transforma a forma de projetar estruturas no Brasil, unindo alto rigor técnico e inovação em automação para entregar soluções seguras, econômicas e eficientes. Nosso time desenvolve plugins exclusivos em Python para integração com TQS, Revit e Excel, acelerando processos e garantindo precisão em cada etapa. Utilizamos a metodologia BIM para compatibilizar e otimizar projetos, reduzindo prazos e evitando retrabalhos. Com mais de 100 projetos concluídos e mais de 600.000 m² projetados em mais de 10 estados, operamos 100% de forma remota, atendendo clientes em todo o país com agilidade, clareza e compromisso com resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* --- Seção de Desafios e Consequências --- */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <article className="rounded-lg border border-border p-8 bg-card h-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Desafios de quem constrói hoje</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-left inline-block">
              {desafios.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="rounded-lg border border-border p-8 bg-card h-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Consequências desses problemas</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-left inline-block">
              {consequencias.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>
      
      {/* --- Seção de Soluções --- */}
      <section className="container py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">Como a BRGT pode te ajudar?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solucoes.map((solucao) => (
            <div key={solucao.title}>
              <article className="rounded-lg border border-border p-6 bg-card h-full flex flex-col items-center text-center shadow-lg">
                <h3 className="font-medium mb-2 text-[#ff6130]">{solucao.title}</h3>
                <p className="text-sm text-muted-foreground">{solucao.text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- Seções Finais --- */}
      <section className="container py-16 text-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Conheça a equipe BRGT</h2>
          </div>
          <div className="flex justify-center">
          <img src={FotoBRGT} alt="Nossa equipe" className="h-80 w-auto" loading="eager" />
        </div>
      </section>
      {/* --- NOVA SEÇÃO DE DEPOIMENTOS COM CARROSSEL --- */}
      <section className="container pb-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">O que os nossos clientes dizem</h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {depoimentos.map((depoimento, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col justify-between text-left p-6 shadow-lg">
                    <CardContent className="p-0 pb-6">
                      <p className="text-muted-foreground italic">"{depoimento.depoimento}"</p>
                    </CardContent>
                    <footer className="flex items-center gap-4 pt-6 border-t">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${depoimento.cliente}`} />
                        <AvatarFallback>{depoimento.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{depoimento.cliente}</p>
                        <p className="text-sm text-muted-foreground">{depoimento.empresa}</p>
                      </div>
                    </footer>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>
    </main>
  );
}