import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center px-4">
          <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
          <h2 className="mb-4">Página não encontrada</h2>
          <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button size="lg" className="gradient-primary text-white">
              <Home className="mr-2 h-5 w-5" />
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
