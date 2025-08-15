import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importando as páginas e componentes de layout
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Portfolio from "./pages/Portfolio";
import ProjetoModelo from "./pages/ProjetoModelo";
import Metodo from "./pages/Metodo";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";

// ✅ 1. IMPORTE O COMPONENTE ScrollToTop
import ScrollToTop from "./components/common/ScrollToTop";


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      {/* ✅ 2. ADICIONE O COMPONENTE AQUI */}
      {/* Este componente irá garantir que cada navegação comece no topo da página */}
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/projeto-modelo" element={<ProjetoModelo />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/contato" element={<Contato />} />
        {/* A rota catch-all "*" deve ser sempre a última */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;