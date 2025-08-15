import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import Sobre from "./pages/Sobre";
import Portfolio from "./pages/Portfolio";
import Metodo from "./pages/Metodo";
import Contato from "./pages/Contato";
import ProjetoModelo from "./pages/ProjetoModelo";



const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/projeto-modelo" element={<ProjetoModelo />} />
        <Route path="/metodo" element={<Metodo />} />
        <Route path="/contato" element={<Contato />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
