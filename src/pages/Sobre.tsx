import { Helmet } from "react-helmet-async";
import { Building2 } from "lucide-react";

// DADOS IMPORTADOS DO ARQUIVO CENTRAL
import { desafios, consequencias, solucoes } from "@/data/sitedata";

// IMPORTAÇÃO DAS IMAGENS DA PÁGINA
import heroSobreNosImg from "@/assets/hero_sobrenos.png";
// ✅ Corrigido para .png e nome mais descritivo
import setasConexaoImg from "@/assets/setas.jpg"; 

// --- COMPONENTE DA PÁGINA ---

export default function Sobre() {
  return (
    <main>
      <Helmet>
        <title>Sobre nós | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Conheça a BRGT: formação, atuação e como ajudamos a construir estruturas seguras e eficientes." />
        <link rel="canonical" href="https://www.seudominio.com.br/sobre" />
      </Helmet>

      {/* --- Seção Hero --- */}
      <section className="relative min-h-screen grid place-content-center text-center p-4">
        <div className="absolute inset-0 -z-10">
          <img 
            src={heroSobreNosImg} 
            alt="Ambiente de engenharia e arquitetura com projetos estruturais" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-background rounded-lg shadow-xl p-8 pt-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#f16136] rounded-md shadow-lg p-4 w-24 h-24 grid place-content-center">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold mb-4">Sobre Nós</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde 2018, a BRGT transforma a forma de projetar estruturas no Brasil, unindo alto rigor técnico e inovação em automação para entregar soluções seguras, econômicas e eficientes. Nosso time desenvolve plugins exclusivos em Python para integração com TQS, Revit e Excel, acelerando processos e garantindo precisão em cada etapa. Utilizamos a metodologia BIM para compatibilizar e otimizar projetos, reduzindo prazos e evitando retrabalhos. Com mais de 100 projetos concluídos e mais de 600.000 m² projetados em mais de 10 estados, operamos 100% de forma remota, atendendo clientes em todo o país com agilidade, clareza e compromisso com resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* --- Seção de Desafios e Consequências com a Seta de Conexão --- */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-3 gap-1 items-center max-w-7xl mx-auto">
          
          {/* Card 1: Desafios */}
          <article className="rounded-lg border border-border p-8 bg-card h-full text-center shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Desafios de quem constrói hoje</h2>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground text-left inline-block">
              {desafios.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          {/* ✅ IMAGEM DA SETA (sem card e menor) */}
          <div className="flex justify-center">
            <img 
              src={setasConexaoImg} 
              alt="Setas indicando que desafios levam a consequências" 
              className="w-24 h-auto" // Tamanho reduzido
            />
          </div>

          {/* Card 2: Consequências */}
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
    <h2 className="text-3xl font-semibold text-[#ff6130]">Como a BRGT pode te ajudar?</h2>
  </div>
  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {solucoes.map((solucao) => (
      <div key={solucao.title}>
        {/* 1. Adicionamos a classe `shadow-lg` para criar o sombreamento no card */}
        <article className="rounded-lg border border-border p-6 bg-card h-full flex flex-col items-center text-center shadow-lg">
          
          {/* 2. Adicionamos a classe `text-[#ff6130]` para aplicar a cor ao título */}
          <h3 className="font-medium mb-2 ">{solucao.title}</h3>

          <p className="text-sm text-muted-foreground">{solucao.text}</p>
        </article>
      </div>
    ))}
  </div>
</section>
      {/* --- Seções Finais --- */}
      <section className="container py-16 text-center">
        <div>
          <h2 className="text-3xl font-semibold mb-3 text-[#ff6130]">Equipe BRGT</h2>
          <p className="text-muted-foreground">Fotos serão adicionadas em breve.</p>
        </div>
      </section>
      <section className="container pb-16 text-center">
        <div>
          <h2 className="text-3xl font-semibold mb-3 text-[#ff6130]">Depoimentos</h2>
          <p className="text-muted-foreground">Veja o que diz quem construiu com a gente.</p>
        </div>
      </section>
    </main>
  );
}