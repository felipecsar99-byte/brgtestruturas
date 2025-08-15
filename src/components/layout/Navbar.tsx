import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Importando a magia da animação
import navbarbrgt from "@/assets/navbarbrgt.png";

// --- DADOS E CONFIGURAÇÕES DO COMPONENTE ---

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/metodo", label: "Método BRGT" },
  { to: "/contato", label: "Contato" },
];

// --- COMPONENTE PRINCIPAL DA NAVBAR ---

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função de estilo para os links mobile
  const getMobileNavItemClass = ({ isActive }: { isActive: boolean }): string =>
    `transition-colors duration-200 ${
      isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 border-b border-white/20">
      <nav className="container flex items-center justify-between h-20">
        
        {/* Bloco do Logotipo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Página inicial da BRGT">
          <img
            src={navbarbrgt}
            alt="BRGT Engenharia Estrutural - logotipo"
            className="h-14 w-auto"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Links de Navegação para Desktop com Efeito "Liquid Glass" */}
        <div className="hidden md:flex items-center gap-1 relative bg-muted/40 p-1 rounded-full">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              className={({ isActive }) =>
                `relative px-4 py-1.5 text-sm font-medium transition-colors z-10 ${
                  isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
                }`
              }
              end
            >
              {({ isActive }) => (
                <>
                  {/* A "PÍLULA" MÁGICA QUE SE MOVE */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary rounded-full"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Botão do Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Painel do Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container flex flex-col items-center gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={getMobileNavItemClass}
                end
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}