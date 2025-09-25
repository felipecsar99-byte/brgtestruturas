// pages/Portfolio.tsx - VERSÃO COM LISTA CURADA DE PROJETOS

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Importação dos dados de todos os projetos
import { projectsData } from "@/data/sitedata";

// ✅ 1. LISTA DOS PROJETOS QUE VOCÊ QUER EXIBIR
// Para adicionar ou remover um projeto do portfólio, basta editar esta lista.
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
  "V196",
  "Horizonte Ponta Negra",
  "Max Serra Dourada",
  "Scenarium Beira Rio II",
  "Max Ipê",
  // Adicione aqui os novos projetos com foto quando estiverem prontos
];

// ✅ 2. FILTRANDO APENAS OS PROJETOS DA LISTA ACIMA
const projetosSelecionados = projectsData.filter(p => portfolioProjectTitles.includes(p.title));

// Definindo as categorias para o filtro
const categorias = [
  "Todos",
  "Alvenaria Estrutural",
  "Concreto Armado",
  "Paredes de Concreto",
];

export default function Portfolio() {
  // Estado para guardar a categoria selecionada
  const [filtro, setFiltro] = useState("Todos");

  // ✅ 3. LÓGICA DE FILTRAGEM ATUALIZADA
  // O filtro agora atua sobre a lista de `projetosSelecionados`.
  const projetosFiltrados =
    filtro === "Todos"
      ? projetosSelecionados
      : projetosSelecionados.filter((projeto) =>
          projeto.description.toLowerCase().includes(filtro.toLowerCase())
        );

  return (
    <main className="pt-20">
      <Helmet>
        <title>Portfólio | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Galeria de projetos estruturais da BRGT. Explore nossos estudos de caso detalhados." />
        <link rel="canonical" href="https://www.seudominio.com.br/portfolio" />
      </Helmet>

      <section className="container py-12">
        <h1 className="text-3xl font-semibold mb-2">Portfólio</h1>
        <p className="text-muted-foreground mb-8">Explore alguns de nossos projetos de destaque. E venha fazer parte dessa história.</p>
        
        {/* Menu de Filtros */}
        <div className="flex justify-left gap-2 mb-8">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={filtro === categoria ? "default" : "outline"}
              onClick={() => setFiltro(categoria)}
            >
              {categoria}
            </Button>
          ))}
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((project) => (
            <Link key={project.id} to={project.link || '#'} className="group block rounded-lg border border-border overflow-hidden bg-card h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="w-full">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`Imagem do projeto ${project.title}`} 
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[16/10] w-full grid place-content-center text-muted-foreground bg-muted/50">Imagem em breve</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium">{project.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mensagem para o caso de nenhum projeto ser encontrado */}
        {projetosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum projeto encontrado para a categoria selecionada.</p>
          </div>
        )}
      </section>
    </main>
  );
}