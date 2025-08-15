// CAMINHO: src/components/common/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // O hook `useLocation` dá-nos acesso à informação da rota atual.
  const { pathname } = useLocation();

  // O hook `useEffect` executa uma função sempre que o valor no seu array de dependências ([pathname]) muda.
  useEffect(() => {
    // Esta é a função do JavaScript que força a janela a ir para o topo (posição 0, 0).
    window.scrollTo(0, 0);
  }, [pathname]); // A função será executada toda a vez que o `pathname` (ex: "/sobre", "/contato") mudar.

  // Este componente não renderiza nada visual, ele apenas contém a lógica.
  return null;
}