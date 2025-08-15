export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} BRGT Engenharia Estrutural. Todos os direitos reservados.</p>
        <nav className="flex items-center gap-4">
          <a href="/sobre" className="hover:text-foreground transition-colors">Sobre</a>
          <a href="/portfolio" className="hover:text-foreground transition-colors">Portfólio</a>
          <a href="/metodo" className="hover:text-foreground transition-colors">Método BRGT</a>
          <a href="/contato" className="hover:text-foreground transition-colors">Contato</a>
        </nav>
      </div>
    </footer>
  );
}
