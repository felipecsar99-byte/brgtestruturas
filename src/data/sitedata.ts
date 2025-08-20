// --- DADOS DOS PROJETOS ---
import raposaImg from "@/assets/raposa.webp";
import altosDoAleixoImg from "@/assets/altosdoaleixo.webp";
import casasLyonImg from "@/assets/casaslyon.webp";
import camposelisiosimg from "@/assets/camposelisios.webp";
import maxcidade from "@/assets/maxcidadeemp.webp";
import max501 from "@/assets/max501norte.webp";
import parcsul from "@/assets/parcsuluberaba.webp";
import moodclub from "@/assets/moodclub.webp";
import terracosky from "@/assets/terracosky.webp";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: any; 
  link?: string;
}

export const projectsData: Project[] = [
    { id: 1, title: "Altos do Aleixo", description: "Projeto em paredes de concreto para condomínio vertical.", image: altosDoAleixoImg, link: "/portfolio/altos-do-aleixo" },
    { id: 2, title: "Residencial Raposa", description: "Projeto em concreto armado de um clube de condomínio de alto padrão.", image: raposaImg, link: "/portfolio/residencial-raposa" },
    { id: 3, title: "Casas Lyon", description: "Projetos em alvenaria estrutural para casas do condomínio horizontal.", image: casasLyonImg, link: "/portfolio/casas-lyon" },  
    // Projetos da lista (sem imagem por enquanto)
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
    { id: 17, title: "Max Cidade Empresarial", description: "Projeto de destaque", image: maxcidade },
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
    { id: 28, title: "Campos Elísios", description: "Projeto de destaque", image: camposelisiosimg },
    { id: 29, title: "Casas Mansour", description: "Projeto de destaque", image: '' },
    { id: 30, title: "Galeria", description: "Projeto de destaque", image: '' },
    { id: 31, title: "Parc Sul Uberaba", description: "Projeto de destaque", image: parcsul },
    { id: 32, title: "Boa Vista", description: "Projeto de destaque", image: '' },
    { id: 33, title: "Novo Gama", description: "Projeto de destaque", image: '' },
    { id: 34, title: "Torres Akso", description: "Projeto de destaque", image: '' },
    { id: 35, title: "Max Ipê", description: "Projeto de destaque", image: '' },
    { id: 36, title: "Scenarium Beira Rio II", description: "Projeto de destaque", image: '' },
    { id: 37, title: "V271", description: "Projeto de destaque", image: '' },
    { id: 38, title: "Chácara São Martinho", description: "Projeto de destaque", image: '' },
    { id: 39, title: "Versa", description: "Projeto de destaque", image: '' },
    { id: 40, title: "Terraço Sky", description: "Projeto de destaque", image: terracosky },
    { id: 41, title: "Dormitórios", description: "Projeto de destaque", image: '' },
    { id: 42, title: "Maringá", description: "Projeto de destaque", image: '' },
    { id: 43, title: "Mirante Boa Vista", description: "Projeto de destaque", image: '' },
    { id: 44, title: "Max 501 Norte", description: "Projeto de destaque", image: max501 },
    { id: 45, title: "V134", description: "Projeto de destaque", image: '' },
    { id: 46, title: "V196", description: "Projeto de destaque", image: '' },
    { id: 47, title: "Smart Fit Distrito", description: "Projeto de destaque", image: '' },
    { id: 48, title: "FGR S1", description: "Projeto de destaque", image: '' },
    { id: 49, title: "FGR S3", description: "Projeto de destaque", image: '' },
    { id: 50, title: "Mood Club House", description: "Projeto de destaque", image: moodclub },
    // ... sua lista de projetos existente ...
];


// --- DADOS DA PÁGINA SOBRE NÓS ---

export const desafios = [
  "Altos custos na execução da estrutura",
  "Confiabilidade Técnica",
  "Prazos de Entrega",
];

export const consequencias = [
  "Aumento no custo total da obra",
  "Retrabalhos em obra",
  "Cronogramas prolongados",
  "Riscos de segurança estrutural",
  "Conflitos entre disciplinas",
];
export const solucoes = [
  {
    title: "Projetos Estruturais otimizados, compatibilizados e fáceis de executar",
    text: "Reduzimos erros, evitamos retrabalho e garantimos que o projeto funcione na prática, com total integração entre disciplinas.",
  },
  {
    title: "Automação Própria e suporte direto à obra",
    text: "Modelagem eficiente com processos automatizados e acompanhamento técnico na execução para assegurar fidelidade ao projeto.",
  },
  {
    title: "Alto rigor técnico",
    text: "Utilizamos soluções de engenharia avançada e análise criteriosa para garantir segurança, precisão e qualidade estrutural.",
  },
  {
    title: "Equipe Sênior",
    text: "Engenheiros experientes, formados nas melhores universidades, com mais de 6 anos de atuação e foco total em otimizar soluções estruturais.",
  },
];

// parte do método brgt

export const metodoSections = [
  {
    title: "Introdução",
    content: "A engenharia estrutural está em plena transformação, impulsionada pela tecnologia. Softwares especializados tornaram-se indispensáveis, trazendo precisão e agilidade ao processo de projeto. Mas percebemos um desafio que afetava não só nossa produtividade, como também a velocidade e o custo final para nossos clientes: a transferência manual de dados entre plataformas podia consumir até 40% do tempo de um projeto. Para mudar esse cenário, desenvolvemos o ecossistema de automação BRGT — um conjunto de soluções próprias em Python que integra, de forma inteligente, os principais softwares do mercado. Isso elimina retrabalhos, reduz prazos e garante entregas mais precisas e econômicas. Com o Método BRGT, cada projeto é pensado para que tecnologia e engenharia trabalhem juntas, transformando produtividade em resultados reais para a sua obra.",
  },
  {
    title: "Plugins Autônomos",
    content: "Desenvolvemos ferramentas próprias em Python que se integram ao TQS e Revit, automatizando tarefas e minimizando erros.",
  },
  {
    title: "Processo de Trabalho",
    content: "Nosso fluxo de trabalho é baseado na metodologia BIM, garantindo compatibilização total e uma visão clara de todas as etapas.",
  },
  {
    title: "Tecnologias e Ferramentas",
    content: "Utilizamos o que há de mais moderno em softwares de análise estrutural e modelagem para entregar resultados precisos.",
  },

];
    //depoimentos

export const depoimentos = [
  {
    cliente: "João Silva",
    empresa: "Construtora Horizonte",
    depoimento: "A parceria com a BRGT foi um divisor de águas. A automação e o rigor técnico da equipa trouxeram uma eficiência que nunca tínhamos visto. O projeto foi entregue antes do prazo e com uma precisão impecável.",
    avatar: "JS", // Iniciais para o avatar
  },
  {
    cliente: "Maria Oliveira",
    empresa: "Arquitetura Criativa",
    depoimento: "A compatibilização de projetos em BIM que a BRGT oferece é simplesmente fantástica. Eliminou todos os conflitos que costumávamos encontrar na obra. São verdadeiros parceiros comprometidos com o resultado.",
    avatar: "MO",
  },
  {
    cliente: "Carlos Pereira",
    empresa: "Engenharia & Cia",
    depoimento: "O suporte técnico e a consultoria da BRGT foram essenciais para o sucesso do nosso empreendimento. A equipa é sénior, experiente e sempre disponível para resolver os desafios mais complexos. Recomendo fortemente.",
    avatar: "CP",
  },
];