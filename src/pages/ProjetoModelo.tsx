import { Helmet } from "react-helmet-async";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function ProjetoModelo() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Projeto Modelo | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Modelo de página de projeto com seções de visão geral, desafio, solução, resultados e galeria." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>

      <article className="container py-12">
        <RevealOnScroll>
          <header>
            <h1 className="text-3xl font-semibold mb-2">Título do Projeto</h1>
            <p className="text-muted-foreground">Breve subtítulo do projeto.</p>
            <div className="mt-6 aspect-[16/9] w-full rounded-lg border border-dashed border-border grid place-content-center text-muted-foreground">Imagem principal em alta resolução (WebP)</div>
          </header>
        </RevealOnScroll>

        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <RevealOnScroll>
            <div className="md:col-span-2">
              <h2 className="text-xl font-medium mb-2">Visão Geral</h2>
              <p className="text-muted-foreground">Introdução ao projeto, metas e público-alvo. Conteúdo placeholder.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <aside className="rounded-lg border border-border p-4">
              <h3 className="font-medium mb-1">Habilidades Aplicadas</h3>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                <li>REVIT / BIM</li>
                <li>Python</li>
                <li>TQS</li>
                <li>CAD</li>
                <li>Análise Estrutural</li>
              </ul>
            </aside>
          </RevealOnScroll>
        </section>

        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-medium mb-2">Desafio</h2>
              <p className="text-muted-foreground">Problemas ou requisitos de engenharia abordados.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div>
              <h2 className="text-xl font-medium mb-2">Solução</h2>
              <p className="text-muted-foreground">Metodologia, softwares e soluções implementadas.</p>
            </div>
          </RevealOnScroll>
        </section>

        <section className="mt-10">
          <RevealOnScroll>
            <h2 className="text-xl font-medium mb-2">Resultados e Impacto</h2>
            <p className="text-muted-foreground">Resultados alcançados (custos, tempo, segurança, inovação).</p>
          </RevealOnScroll>
        </section>

        <section className="mt-10">
          <RevealOnScroll>
            <h2 className="text-xl font-medium mb-4">Galeria</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <div className="aspect-[16/10] w-full rounded-md border border-dashed border-border grid place-content-center text-muted-foreground">Imagem {i + 1}</div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
