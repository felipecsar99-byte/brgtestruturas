// src/App.tsx (Esta é a versão 100% correta)

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

import ScrollToTop from "./components/common/ScrollToTop";

// ✅ 1. IMPORTAÇÕES DO BLOG (VERIFIQUE SE ESTÃO AQUI)
import Blog from "./pages/Blog";
import Post from "./pages/Post";


const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* --- Páginas Existentes --- */}
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/projeto-modelo" element={<ProjetoModelo />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/contato" element={<Contato />} />

        {/* ✅ 2. ROTAS DO BLOG (VERIFIQUE SE ESTÃO AQUI) */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Post />} />

        {/* A rota catch-all "*" deve ser sempre a última */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;