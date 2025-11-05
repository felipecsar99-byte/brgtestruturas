// src/pages/Post.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

// URL da API (o mesmo do Blog.tsx)
const WP_API_URL = "https://brgt.com.br/blog-admin";

// Interface para o post individual
interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string; // Conteúdo completo
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

// ✅ CORREÇÃO AQUI: Adicionado "default"
export default function Post() {
  const { slug } = useParams<{ slug: string }>(); // Pega o "slug" do URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        // Busca o post específico pelo seu "slug"
        const response = await fetch(`${WP_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`);
        if (!response.ok) {
          throw new Error('Falha ao buscar dados da API');
        }
        const data: Post[] = await response.json();
        
        if (data.length > 0) {
          setPost(data[0]); // Pega o primeiro (e único) post encontrado
        }
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]); // Executa novamente se o slug mudar

  const imageUrl = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <main className="pt-20 min-h-screen">
      <Helmet>
        <title>{loading ? 'Carregando...' : `${post?.title.rendered || 'Post'} | BRGT Blog`}</title>
      </Helmet>

      <section className="container py-12">
        {loading && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">A carregar post...</p>
          </div>
        )}

        {!loading && !post && (
          <div className="text-center py-16">
            <h1 className="text-2xl font-semibold mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">Não conseguimos encontrar o post que você está a procurar.</p>
            <Link to="/blog" className="text-primary hover:underline">
              Voltar para o Blog
            </Link>
          </div>
        )}

        {post && (
          <article className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>

            {imageUrl && (
              <img 
                src={imageUrl} 
                alt={post.title.rendered}
                className="w-full h-auto aspect-video object-cover rounded-lg mb-8 shadow-lg"
              />
            )}

            <h1 
              className="text-3xl md:text-4xl font-semibold mb-6"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </article>
        )}
      </section>
    </main>
  );
}