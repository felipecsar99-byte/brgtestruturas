import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones para o menu (hambúrguer e fechar)
import { Button } from "@/components/ui/button"; // Componente de botão da sua UI
import navbarbrgt from "@/assets/navbarbrgt.png";

// --- DADOS E CONFIGURAÇÕES DO COMPONENTE ---

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/metodo", label: "Método BRGT" },
  { to: "/contato", label: "Contato" },
];

// Função para estilizar os links (tanto para desktop quanto para mobile)
const getNavItemClass = ({ isActive }: { isActive: boolean }): string =>
  `transition-colors duration-200 ${
    isActive
      ? "text-primary"
      : "text-foreground/70 hover:text-foreground"
  }`;

// --- COMPONENTE PRINCIPAL DA NAVBAR ---

export default function Navbar() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
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
          <span className="sr-only">BRGT Engenharia</span> 
        </Link>

        {/* Links de Navegação para Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              className={getNavItemClass} 
              end
            >
              {item.label}
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

      {/* Painel do Menu Mobile (só aparece se isMenuOpen for true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container flex flex-col items-center gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.to} 
                to={item.to} 
                className={getNavItemClass} 
                end
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar num link
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