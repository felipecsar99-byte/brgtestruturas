import { Helmet } from "react-helmet-async";
import { Zap } from "lucide-react";

// --- IMPORTAÇÃO DOS COMPONENTES DE UI ---
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// --- DADOS DA PÁGINA ---
import { metodoSections } from "@/data/sitedata";

// --- IMPORTAÇÃO DAS IMAGENS ---
import heroMetodoImg from "@/assets/hero_metodo.webp";
// Importando as imagens das tecnologias
import sap2000Img from "@/assets/sap2000.png";
import tqsImg from "@/assets/tqs.png";
import revitImg from "@/assets/revit.png";
import excelImg from "@/assets/excel.png";
import autocadImg from "@/assets/autocad.png";
import pythonImg from "@/assets/python.png";

// --- DADOS PARA O CARROSSEL DE TECNOLOGIAS ---
const tecnologias = [
  { name: "SAP 2000", image: sap2000Img },
  { name: "TQS", image: tqsImg },
  { name: "Revit", image: revitImg },
  { name: "Excel", image: excelImg },
  { name: "AutoCAD", image: autocadImg },
  { name: "Python", image: pythonImg },
];

// --- COMPONENTE DA PÁGINA ---

export default function Metodo() {
  const introducao = metodoSections.find(sec => sec.title === "Introdução");
  const secoesFinais = metodoSections.filter(
    (section) =>
      !["Introdução", "Plugins Autônomos", "Processo de Trabalho", "Tecnologias e Ferramentas"].includes(section.title)
  );

  return (
    <main>
      <Helmet>
        <title>Método BRGT | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Conheça o Método BRGT: plugins autônomos, processos e tecnologias." />
        <link rel="canonical" href="https://www.seudominio.com.br/metodo" />
      </Helmet>

      {/* --- Seção Hero --- */}
      <section className="relative min-h-screen grid place-content-center text-center p-4">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroMetodoImg}
            alt="Ilustração de processos de engenharia e automação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-background rounded-lg shadow-xl p-8 pt-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#f16136] rounded-md shadow-lg p-4 w-24 h-24 grid place-content-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-semibold mb-4">{introducao?.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {introducao?.content}
            </p>
          </div>
        </div>
      </section>

      {/* --- Seção de Plugins Autônomos --- */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-2">Plugins Autônomos</h2>
          <h3 className="text-lg text-muted-foreground mb-8">Para mais informações sobre como vamos elevar a sua obra, clique nos cards.</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <a href="https://www.instagram.com/p/C4tDCrygmn1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
              <Card className="bg-primary/5 border-primary/20 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Modulação Automática de Alvenaria</CardTitle>
                  <CardDescription className="font-medium">Agilidade e Precisão</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"><p className="text-sm">Reduzimos a modelagem de elevações, que levaria um dia inteiro, para minutos, automatizando a criação de paredes e reforços.</p></CardContent>
              </Card>
            </a>
            <a href="https://www.instagram.com/p/C5y6O8vpBPL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
              <Card className="bg-primary/5 border-primary/20 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Plugin de Inserção de Arranques</CardTitle>
                  <CardDescription className="font-medium">Da Análise à Execução, Sem Erros</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"><p className="text-sm">Nossa ferramenta transfere as coordenadas exatas do software de cálculo para o modelo BIM automaticamente, garantindo uma montagem rápida e segura.</p></CardContent>
              </Card>
            </a>
            <a href="https://www.instagram.com/p/C4N5p15g7_Q/?utm_source=ig_web_copy_link" target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
              <Card className="bg-primary/5 border-primary/20 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Integração TQS-Revit</CardTitle>
                  <CardDescription className="font-medium">Inteligência BIM Sem Conflitos</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"><p className="text-sm">Convertemos informações do TQS em um modelo BIM rico em dados no Revit, o que significa compatibilização total e menos retrabalhos no canteiro.</p></CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* --- Seção de Processo de Trabalho --- */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Processo de Trabalho</h2>
          <div className="bg-card rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-foreground text-center">Etapa</TableHead>
                  <TableHead className="font-semibold text-foreground text-center">O que fazemos</TableHead>
                  <TableHead className="font-semibold text-foreground text-center">O que você ganha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">1. Imersão</TableCell>
                  <TableCell>Realizamos um diagnóstico completo para entender suas metas e desafios.</TableCell>
                  <TableCell>Um plano estratégico claro e uma solução estrutural personalizada.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2. Análise e Otimização</TableCell>
                  <TableCell>Aplicamos o <strong>Método BRGT</strong> para otimizar e preparar os dados.</TableCell>
                  <TableCell>A segurança de uma análise aprofundada e a base para um processo mais rápido.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">3. Modelagem BIM</TableCell>
                  <TableCell>Nossos plugins automatizam a criação do modelo 3D no Revit.</TableCell>
                  <TableCell>Um projeto 100% compatível, livre de conflitos e com precisão milimétrica.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">4. Entrega e Suporte</TableCell>
                  <TableCell>Entregamos um projeto executivo inteligente e oferecemos suporte contínuo.</TableCell>
                  <TableCell>A tranquilidade de ter um parceiro comprometido com o sucesso da sua obra.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* --- Seção de Tecnologias e Ferramentas (COM LOGOS MAIORES E 3 POR VEZ) --- */}
      <section className="container py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-2 text-primary">Tecnologias e Ferramentas</h2>
          <p className="text-muted-foreground mb-8">Utilizamos o que há de mais moderno em softwares de análise estrutural e modelagem.</p>
          
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {tecnologias.map((tech) => (
                // ✅ `basis-1/3` força a exibição de 3 itens por vez.
                <CarouselItem key={tech.name} className="basis-1/3">
                  <div className="flex items-center justify-center p-2 h-48">
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      // ✅ A altura foi aumentada para `h-32` (o dobro de h-16).
                      className="h-32 w-auto object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* --- Seções Finais --- */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          {secoesFinais.map((section) => (
            <article key={section.title}>
              <h2 className="text-3xl font-semibold mb-3 text-primary">
                {section.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {section.content}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}