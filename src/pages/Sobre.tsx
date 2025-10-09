import { Helmet } from "react-helmet-async";
import { Building2 } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Importando clientes
import clienteAkso from "@/assets/cliente_akso.webp";
import clienteCea from "@/assets/cliente_cea.webp";
import clienteFabrizio from "@/assets/cliente_fabrizio.webp";
import clienteFgr from "@/assets/cliente_fgr.webp";
import clienteHlts from "@/assets/cliente_hlts.webp";
import clienteMaximo from "@/assets/cliente_maximo.webp";
import clienteOm from "@/assets/cliente_om.webp";
import clientePafil from "@/assets/cliente_pafil.webp";
import clientePf from "@/assets/cliente_pf.webp";
import clienteRte from "@/assets/cliente_rte.webp";
import clienteTelos from "@/assets/cliente_telos.webp";
import clienteVega from "@/assets/cliente_vega.webp";
import clienteVitta from "@/assets/cliente_vitta.webp";

const clientes = [
  { name: "Akso", image: clienteAkso },
  { name: "Cea", image: clienteCea },
  { name: "Fabrizio", image: clienteFabrizio },
  { name: "Fgr", image: clienteFgr },
  { name: "Hlts", image: clienteHlts },
  { name: "Maximo", image: clienteMaximo },
  { name: "Om", image: clienteOm },
  { name: "Pafil", image: clientePafil },
  { name: "Pf", image: clientePf },
  { name: "Rte", image: clienteRte },
  { name: "Telos", image: clienteTelos },
  { name: "Vega", image: clienteVega },
  { name: "Vitta", image: clienteVitta },
];

// ✅ 1. IMPORTANDO O HOOK useParallax
import { useParallax } from "@/hooks/use-parallax";
// --- IMPORTAÇÃO DOS COMPONENTES DE UI ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- DADOS DA PÁGINA ---
import { solucoes, desafios, consequencias, depoimentos, teamMembers } from "@/data/sitedata";

// IMPORTAÇÃO DAS IMAGENS DA PÁGINA
// ✅ A IMAGEM AGORA É IMPORTADA NO FORMATO .webp OTIMIZADO
import heroSobreNosImg from "@/assets/hero_sobrenos.jpg";

// --- COMPONENTE DA PÁGINA ---

export default function Sobre() {
  // ✅ 2. INICIALIZANDO O HOOK DO PARALLAX
  const bgRef = useParallax(0.3); // 30% da velocidade de rolagem

  return (
    <main>
      <Helmet>
        <title>Sobre nós | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Conheça a BRGT: formação, atuação e como ajudamos a construir estruturas seguras e eficientes." />
        <link rel="canonical" href="https://www.brgt.com.br/sobre" />
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
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ff6130]">Sobre Nós</h1>
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
            <h2 className="text-2xl font-semibold mb-4 text-[#ff6130]">Desafios de quem constrói hoje</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-left inline-block">
              {desafios.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="rounded-lg border border-border p-8 bg-card h-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-[#ff6130]">Consequências desses problemas</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-left inline-block">
              {consequencias.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>
      
      {/* --- Seção de Soluções --- */}
      <section className="container py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#ff6130]">Como a BRGT pode te ajudar?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solucoes.map((solucao) => (
            <div key={solucao.title}>
              <article className="rounded-lg border border-border p-6 bg-card h-full flex flex-col items-center text-center shadow-lg">
                <h3 className="font-medium mb-2">{solucao.title}</h3>
                <p className="text-sm text-muted-foreground">{solucao.text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
      
    {/* --- EQUIPE BRGT (COM CARDS DINÂMICOS E CENTRALIZADOS) --- */}
      <div className="bg-[#f48861]">
        <section className="container py-24 text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Conheça a equipe BRGT</h2>
          {/* ✅ Usamos Flexbox com 'wrap' e 'justify-center' para o alinhamento perfeito */}
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {teamMembers.map((membro) => (
              <div key={membro.id} className="text-center w-full max-w-[240px] sm:w-1/2 md:w-1/3">
                {/* Contêiner da Imagem */}
                <div className="aspect-square w-full mx-auto mb-4 rounded-lg overflow-hidden bg-muted shadow-md">
                  {membro.imagem ? (
                    <img
                      src={membro.imagem}
                      alt={`Foto de ${membro.nome}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    // Placeholder para quando não houver imagem
                    <div className="w-full h-full grid place-content-center text-muted-foreground text-sm">
                      Foto
                    </div>
                  )}
                </div>

              {/* Informações */}
              <div>
                <h3 className="font-semibold text-lg text-white">{membro.nome}</h3>
                <p className="text-black">{membro.funcao}</p>
              </div>
            </div>
            ))}
          </div>
        </section>
      </div>

        {/* Seção de Clientes e Parceiros */}
        <section className="container py-16 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-2 text-[#ff6130]">Clientes e Parceiros</h2>
            <p className="mb-8">Temos orgulho de colaborar com grandes nomes do mercado da construção.</p>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {clientes.map((cliente) => (
                  <CarouselItem key={cliente.name} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="p-4">
                      <img
                        src={cliente.image}
                        alt={cliente.name}
                        className="h-60 w-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
    </main>
  );
}