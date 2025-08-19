import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, MessageCircle, Instagram } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contato() {
  // Estado para guardar os dados do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  // Estado para controlar o feedback visual para o utilizador
  const [status, setStatus] = useState(''); // "", "enviando", "sucesso", "erro"

  // Função que atualiza o estado sempre que o utilizador digita algo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Função executada quando o formulário é submetido
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('enviando');

    // 👇 SUBSTITUA PELAS SUAS 3 CHAVES OBTIDAS NO PASSO 2
    const serviceID = 'service_vnal9qw';
    const templateID = 'template_hlx83lt';
    const publicKey = 'rnH0oiejUE2yaMYEK';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('E-MAIL ENVIADO!', response.status, response.text);
        setStatus('sucesso');
        // Limpa o formulário
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
      }, (err) => {
        console.log('ERRO AO ENVIAR...', err);
        setStatus('erro');
      });
  };

  return (
    <main className="pt-20">
      <Helmet>
        <title>Contato | BRGT Engenharia Estrutural</title>
        <meta name="description" content="Fale com a BRGT: formulário, telefone, e-mail e WhatsApp." />
        <link rel="canonical" href="https://www.seudominio.com.br/contato" />
      </Helmet>

      <section className="container py-12">
        <h1 className="text-3xl font-semibold mb-6">Contato</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          
          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formulário de contato">
            {/* O atributo "id" de cada campo DEVE ser o mesmo da variável no template (ex: id="nome" -> {{nome}}) */}
            <div>
              <label className="block text-sm mb-1" htmlFor="nome">Nome</label>
              <Input id="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">E-mail</label>
              <Input id="email" value={formData.email} onChange={handleChange} type="email" placeholder="Seu e-mail" required />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="assunto">Assunto</label>
              <Input id="assunto" value={formData.assunto} onChange={handleChange} placeholder="Assunto" required />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="mensagem">Mensagem</label>
              <Textarea id="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Como podemos elevar o nível da sua obra?" className="min-h-32" required />
            </div>
            <Button type="submit" disabled={status === 'enviando'}>
              {status === 'enviando' ? 'Enviando...' : 'Enviar'}
            </Button>

            {/* Mensagens de feedback para o utilizador */}
            {status === 'sucesso' && <p className="text-green-500 mt-4">Mensagem enviada com sucesso! Obrigado.</p>}
            {status === 'erro' && <p className="text-red-500 mt-4">Ocorreu um erro. Por favor, tente novamente.</p>}
          </form>

          <div className="space-y-6">
            <div className="rounded-lg border border-border p-4">
              <h2 className="text-xl font-medium mb-2">Informações de contato</h2>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2"><Phone className="text-primary" size={18}/> Telefone: +55 62 99607-0096</li>
                <li className="flex items-center gap-2"><Mail className="text-primary" size={18}/> E-mail: brgt@brgt.com.br</li>
              </ul>
              <div className="flex items-center gap-4 mt-4">
                <Button asChild>
                  <a href="https://wa.me/556296070096" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2" size={18}/> WhatsApp</a>
                </Button>
                <a 
                  href="https://www.instagram.com/brgt.estruturas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-2">Localização</h2>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  title="Mapa de localização BRGT"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.782575454157!2d-49.26388912595932!3d-16.68934148408169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1690c1a9699%3A0x23a8177a3d1323b7!2sBRGT%20Engenharia%20Estrutural!5e0!3m2!1spt-BR!2sbr!4v1723753239535!5m2!1spt-BR!2sbr"
                  className="w-full h-full rounded-md border border-border"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}