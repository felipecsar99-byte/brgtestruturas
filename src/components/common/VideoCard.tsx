// src/components/common/VideoCard.tsx

interface VideoCardProps {
  youtubeId: string;
  title: string;
  description?: string;
}

export function VideoCard({ youtubeId, title, description }: VideoCardProps) {
  return (
    // O card principal
    <div className="bg-card border border-border rounded-lg shadow-md overflow-hidden">
      
      {/* Container responsivo para o vídeo */}
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Área de conteúdo do card */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}