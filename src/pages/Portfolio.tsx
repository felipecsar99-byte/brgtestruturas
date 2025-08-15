// pages/Portfolio.tsx - VERSÃO CORRIGIDA

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/common/RevealOnScroll";

// Importação corrigida para o arquivo renomeado
import { projectsData } from "@/data/sitedata";

// Lista dos projetos que você quer exibir
const portfolioProjectTitles = [
  "Residencial Raposa",
  "Altos do Aleixo",
  "Casas Lyon",
  "Max Cidade Empresarial",
  "Max 501 Norte",
  "Terraço Sky",
  "Parc Sul Uberaba",
  "Campos Elísios",
  "Mood Club House",
];

// Filtrando os dados para pegar apenas os projetos da lista
const featuredProjects = projectsData.filter(p => portfolioProjectTitles.includes(p.title));

export default function Portfolio() {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Portfólio | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Galeria de projetos estruturais da BRGT. Explore nossos estudos de caso detalhados." />
        <link rel="canonical" href="https://www.seudominio.com.br/portfolio" />
      </Helmet>

      <section className="container py-12">
        <RevealOnScroll>
          <h1 className="text-3xl font-semibold mb-2">Portfólio</h1>
          <p className="text-muted-foreground mb-8">Explore alguns de nossos projetos de destaque.</p>
        </RevealOnScroll>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 50}>
              <Link to={project.link || '#'} className="group block rounded-lg border border-border overflow-hidden relative shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="w-full">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`Imagem do projeto ${project.title}`} 
                      className="aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-[16/10] object-cover grid place-content-center text-muted-foreground">Imagem em breve</div>
                  )}
                </div>
                  <div className="p-4 flex-grow-0 flex-shrink-0" style={{ height: '110px' }}>
                  <h3 className="font-medium text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>
    </main>
  );
}