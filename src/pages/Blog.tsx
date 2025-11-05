// src/pages/Blog.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// --- Defina a URL da sua API do WordPress ---
const WP_API_URL = "https://brgt.com.br/blog-admin";

// Interface para definir o formato dos dados do post
interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

// ✅ CORREÇÃO AQUI: Adicionado "default"
export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?_embed=true`);
        if (!response.ok) {
          throw new Error('Falha ao buscar dados da API');
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="pt-20 min-h-screen">
      <Helmet>
        <title>Blog | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Artigos e novidades sobre engenharia estrutural e automação." />
        <link rel="canonical" href="https://www.brgt.com.br/blog" />
      </Helmet>

      <section className="container py-12">
        <h1 className="text-3xl font-semibold mb-8">Blog</h1>

        {loading && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">A carregar posts...</p>
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Nenhum post encontrado.</p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

            return (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`} 
                className="group block rounded-lg border border-border overflow-hidden bg-card h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-full">
                  {imageUrl ? (
                    <img 
                      src={imageUrl}
                      alt={post.title.rendered} 
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-[16/10] w-full grid place-content-center text-muted-foreground bg-muted/50">
                      Sem imagem
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 
                    className="font-medium text-lg"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className="text-sm text-muted-foreground mt-2 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}