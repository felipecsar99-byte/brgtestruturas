import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-[70vh] pt-20 container grid place-content-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-muted-foreground mb-4">Oops! Página não encontrada</p>
        <a href="/" className="text-primary underline">Voltar para a Home</a>
      </div>
    </main>
  );
};

export default NotFound;
