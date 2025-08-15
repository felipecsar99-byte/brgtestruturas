import { NavLink } from "react-router-dom";
import navbarbrgt from "@/assets/navbarbrgt.png";

// --- DADOS E CONFIGURAÇÕES DO COMPONENTE ---

/**
 * Array de objetos que define os itens da navegação.
 * Manter os dados separados do JSX torna o componente mais limpo e fácil de manter.
 */
const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/portfolio", label: "Portfólio" },
  { to: "/metodo", label: "Método BRGT" },
  { to: "/contato", label: "Contato" },
];

/**
 * Função que gera dinamicamente as classes CSS para os links de navegação.
 * Utiliza o estado `isActive` fornecido pelo NavLink para destacar o link da página atual.
 */
const getNavItemClass = ({ isActive }: { isActive: boolean }): string =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
    isActive
      ? "text-primary bg-primary/10" // Estilo para o link ativo (ex: cor primária com um fundo sutil)
      : "text-foreground/70 hover:text-foreground" // Estilo para links inativos e efeito hover
  }`;


// --- COMPONENTE PRINCIPAL DA NAVBAR ---

export default function Navbar() {
  return (
    /**
     * `<header>` é a tag semântica correta para o cabeçalho principal do site.
     * Classes aplicadas:
     * - `fixed top-0 left-0 right-0`: Fixa a barra no topo da janela.
     * - `z-50`: Garante que a navbar fique acima da maioria dos outros elementos da página.
     * - `backdrop-blur`: Aplica um efeito de desfoque ao fundo.
     * - `supports-[backdrop-filter]:bg-background/75`: Aplica um fundo semi-transparente apenas em navegadores que suportam o filtro de desfoque, melhorando a compatibilidade.
     * - `border-b border-border`: Adiciona uma linha fina na parte de baixo da barra.
     */
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      
      {/**
       * `<nav>` é a tag semântica para a navegação principal.
       * Classes aplicadas:
       * - `container`: Centraliza o conteúdo, respeitando a largura máxima definida no seu tema.
       * - `flex items-center justify-between`: Cria um layout flexível, alinha os itens verticalmente ao centro e os distribui com espaço entre eles (logo à esquerda, links à direita).
       * - `h-16`: Define a ALTURA da barra de navegação para 4rem (64px).
       */}
      <nav className="container flex items-center justify-between h-20">
        
        {/* Bloco do Logotipo */}
        <a href="/" className="flex items-center gap-3" aria-label="Página inicial da BRGT">
          <img
            // Recomenda-se importar a imagem para que o Vite/bundler a otimize
            src={navbarbrgt}
            alt="BRGT Engenharia Estrutural - logotipo"
            className="h-14 w-auto" // A altura do logo (48px)
            loading="eager" // Carrega a imagem com prioridade, pois está no topo da página
            decoding="async"
          />
          {/* Texto para leitores de tela, melhora a acessibilidade */}
          <span className="sr-only">BRGT Engenharia</span> 
        </a>

        {/* Bloco dos Links de Navegação */}
        <div className="hidden md:flex items-center gap-1"> {/* `hidden md:flex` esconde os links em telas pequenas */}
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              className={getNavItemClass} 
              end // A prop `end` garante que o link "Home" só fique ativo na página inicial exata
            >
              {item.label}
            </NavLink>
          ))}
        </div>

      </nav>
    </header>
  );
}