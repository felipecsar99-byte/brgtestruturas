// Imports de bibliotecas e componentes
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, Layers3, Ruler, Hammer, ClipboardCheck, Boxes } from "lucide-react";

// Components e Hooks customizados
import { Button } from "@/components/ui/button";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useParallax } from "@/hooks/use-parallax";

// Assets (Imagens)
import logocrua from "@/assets/logocruabrgt.png";
import hero1920 from "@/assets/hero-1920x1080.webp";
import hero1280 from "@/assets/hero-1280x720.webp";
import hero768 from "@/assets/hero-768x512.webp";
import raposaImg from "@/assets/raposa.jpg";
import altosDoAleixoImg from "@/assets/altosdoaleixo.jpg";
import casasLyonImg from "@/assets/casaslyon.jpg";
import brgt_logocompleta from "@/assets/brgt_logocompleta.png";

// --- DADOS CENTRALIZADOS ---

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; 
  link?: string; 
}

const stats = [
  { id: "s1", value: "+100", label: "projetos entregues" },
  { id: "s2", value: "+600.000", label: "m² projetados" },
  { id: "s3", value: "+6", label: "anos no mercado" },
  { id: "s4", value: "+10", label: "estados atendidos" },
  { id: "s5", value: "+120.000", label: "m² avaliados" },
];

const services = [
  { id: "svc1", icon: Building2, title: "Alvenaria Estrutural" },
  { id: "svc2", icon: ClipboardCheck, title: "ATP" },
  { id: "svc3", icon: Layers3, title: "Concreto Armado" },
  { id: "svc4", icon: Boxes, title: "Parede de Concreto" },
  { id: "svc5", icon: Hammer, title: "Consultoria Técnica" },
  { id: "svc6", icon: Ruler, title: "Compatibilização de Estrutura" },
];

const projectsData: Project[] = [
    { id: 1, title: "Altos do Aleixo", description: "Projeto em paredes de concreto para condomínio vertical.", image: altosDoAleixoImg, link: "/portfolio/altos-do-aleixo" },
    { id: 2, title: "Residencial Raposa", description: "Projeto em concreto armado de um clube de condomínio de alto padrão.", image: raposaImg, link: "/portfolio/residencial-raposa" },
    { id: 3, title: "Casas Lyon", description: "Projetos em alvenaria estrutural para casas do condomínio horizontal.", image: casasLyonImg, link: "/portfolio/casas-lyon" },  
    { id: 4, title: "Casas Haus", description: "Projeto de destaque", image: '' },
    { id: 5, title: "Unique Tower", description: "Projeto de destaque", image: '' },
    { id: 6, title: "Eco Resort", description: "Projeto de destaque", image: '' },
    { id: 7, title: "Ponte Caldas", description: "Projeto de destaque", image: '' },
    { id: 8, title: "Vitta Veiga Jardim", description: "Projeto de destaque", image: '' },
    { id: 9, title: "Villago", description: "Projeto de destaque", image: '' },
    { id: 10, title: "V095 Flora", description: "Projeto de destaque", image: '' },
    { id: 11, title: "V122 Parque dos Sabiás", description: "Projeto de destaque", image: '' },
    { id: 12, title: "Bem Te Vi", description: "Projeto de destaque", image: '' },
    { id: 13, title: "Mississipi", description: "Projeto de destaque", image: '' },
    { id: 14, title: "Verde e Amarelo", description: "Projeto de destaque", image: '' },
    { id: 15, title: "Reservas Granville", description: "Projeto de destaque", image: '' },
    { id: 16, title: "Jardins Vienna", description: "Projeto de destaque", image: '' },
    { id: 17, title: "Max Cidade Empresarial", description: "Projeto de destaque", image: '' },
    { id: 18, title: "Max Serra Dourada", description: "Projeto de destaque", image: '' },
    { id: 19, title: "V165 Mattiolli", description: "Projeto de destaque", image: '' },
    { id: 20, title: "Arrimos Cannes", description: "Projeto de destaque", image: '' },
    { id: 21, title: "Arrimos Lyon", description: "Projeto de destaque", image: '' },
    { id: 22, title: "Fundação Cannes", description: "Projeto de destaque", image: '' },
    { id: 23, title: "Orquídeas", description: "Projeto de destaque", image: '' },
    { id: 24, title: "Primaveras", description: "Projeto de destaque", image: '' },
    { id: 25, title: "Horizonte Ponta Negra", description: "Projeto de destaque", image: '' },
    { id: 26, title: "Casa Karaíba", description: "Projeto de destaque", image: '' },
    { id: 27, title: "Caixa Libri One", description: "Projeto de destaque", image: '' },
    { id: 28, title: "Campos Elísios", description: "Projeto de destaque", image: '' },
    { id: 29, title: "Casas Mansour", description: "Projeto de destaque", image: '' },
    { id: 30, title: "Galeria", description: "Projeto de destaque", image: '' },
    { id: 31, title: "Parc Sul Uberaba", description: "Projeto de destaque", image: '' },
    { id: 32, title: "Boa Vista", description: "Projeto de destaque", image: '' },
    { id: 33, title: "Novo Gama", description: "Projeto de destaque", image: '' },
    { id: 34, title: "Torres Akso", description: "Projeto de destaque", image: '' },
    { id: 35, title: "Max Ipê", description: "Projeto de destaque", image: '' },
    { id: 36, title: "Scenarium Beira Rio II", description: "Projeto de destaque", image: '' },
    { id: 37, title: "V271", description: "Projeto de destaque", image: '' },
    { id: 38, title: "Chácara São Martinho", description: "Projeto de destaque", image: '' },
    { id: 39, title: "Versa", description: "Projeto de destaque", image: '' },
    { id: 40, title: "Terraço Sky", description: "Projeto de destaque", image: '' },
    { id: 41, title: "Dormitórios", description: "Projeto de destaque", image: '' },
    { id: 42, title: "Maringá", description: "Projeto de destaque", image: '' },
    { id: 43, title: "Mirante Boa Vista", description: "Projeto de destaque", image: '' },
    { id: 44, title: "Max 501 Norte", description: "Projeto de destaque", image: '' },
    { id: 45, title: "V134", description: "Projeto de destaque", image: '' },
    { id: 46, title: "V196", description: "Projeto de destaque", image: '' },
    { id: 47, title: "Smart Fit Distrito", description: "Projeto de destaque", image: '' },
    { id: 48, title: "FGR S1", description: "Projeto de destaque", image: '' },
    { id: 49, title: "FGR S3", description: "Projeto de destaque", image: '' },
    { id: 50, title: "Mood Club House", description: "Projeto de destaque", image: '' },
];

const Index = () => {
  const bgRef = useParallax(0.35);
  const advRef = useParallax(0.25);

  return (
    <>
      <Helmet>
        <title>BRGT Engenharia Estrutural | Home</title>
        <meta name="description" content="Soluções estruturais seguras e sem desperdícios. Portfólio, método BRGT e contato." />
        <link rel="canonical" href="https://www.seudominio.com.br" /> 
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center" aria-label="Seção principal">
        <div ref={bgRef} className="absolute inset-0 -z-10 will-change-transform overflow-hidden">
          <picture>
            <source srcSet={`${hero1920} 1920w, ${hero1280} 1280w, ${hero768} 768w`} type="image/webp" />
            <img src={hero1920} alt="Texturas arquitetônicas e linhas de projeto, fundo técnico" className="h-full w-full object-cover" loading="eager" decoding="async" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/35 to-background/80" />
        </div>

        <div className="container pt-20 pb-5">
          <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-3">
            <img src={logocrua} alt="Logotipo BRGT Engenharia Estrutural" className="h-60 w-auto" loading="eager" />
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Soluções estruturais seguras e sem desperdícios</h1>
            <div className="mt-2">
              <Button asChild><Link to="/contato" aria-label="Solicite um orçamento">Solicite um Orçamento</Link></Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 mt-2">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="relative py-20 md:py-28" aria-label="Vantagens do nosso escritório">
        <div ref={advRef} className="absolute inset-0 -z-10 opacity-60 will-change-transform">
          <div className="h-full w-full bg-gradient-to-b from-background via-background to-background" />
        </div>
        <div className="container">
          <RevealOnScroll><h2 className="text-2xl md:text-3xl font-semibold mb-6">Vantagens de nosso escritório</h2></RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {["Projetos otimizados e compatibilizados", "Automação própria e suporte à obra", "Rigor técnico com equipe sênior"].map((title, idx) => (
              <RevealOnScroll key={title} delay={idx * 80}>
                <div className="rounded-lg border border-border p-6 bg-card shadow-[var(--shadow-elevate)] h-full">
                  <h3 className="font-medium mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">Conteúdo a ser detalhado posteriormente.</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 md:py-20" aria-label="Serviços">
        <div className="container">
          <RevealOnScroll><h2 className="text-2xl md:text-3xl font-semibold mb-8">Serviços</h2></RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ id, icon: Icon, title }, i) => (
              <RevealOnScroll key={id} delay={i * 70}>
                <Link to="/contato" className="group block rounded-lg border border-border p-6 bg-card transition-transform hover:translate-y-[-2px] h-full">
                  <Icon className="mb-3 text-primary" size={32} />
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Saiba mais</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild><Link to="/portfolio">Explore Nossos Projetos</Link></Button>
          </div>
        </div>
      </section>

      {/* Últimos Projetos (Dinâmico) */}
      <section className="py-16 md:py-20 border-t border-border" aria-label="Projetos de destaque">
        <div className="container">
          <RevealOnScroll><h2 className="text-2xl md:text-3xl font-semibold mb-8">Projetos de Destaque</h2></RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, index) => (
              <RevealOnScroll key={project.id} delay={index * 100}>
                <Link to={project.link || '#'} className="block group">
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-border mb-4 shadow-md">
                    <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{project.description}</p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Projetos de Destaque (Dinâmica) */}
      <section className="py-14" aria-label="Lista de Projetos">
        <div className="container">
          <RevealOnScroll><h2 className="text-xl md:text-2xl font-semibold mb-4">Lista de Projetos</h2></RevealOnScroll>
          <RevealOnScroll>
            <ul className="text-muted-foreground grid md:grid-cols-3 gap-x-6 gap-y-2 list-disc list-inside">
              {projectsData.map((project) => (
                <li key={project.id}>{project.title}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};

export default Index;