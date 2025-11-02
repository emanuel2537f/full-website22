interface ArtworkCardProps {
  imageSrc: string;
  title: string;
  year: string;
  technique: string;
  onClick: () => void;
}

export default function ArtworkCard({
  imageSrc,
  title,
  year,
  technique,
  onClick,
}: ArtworkCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group"
      data-testid={`card-artwork-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative overflow-hidden rounded-md bg-card mb-4 aspect-[3/4]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-lg" data-testid="text-artwork-title">{title}</h3>
        <p className="text-sm text-muted-foreground" data-testid="text-artwork-year">{year}</p>
        <p className="text-sm text-muted-foreground" data-testid="text-artwork-technique">{technique}</p>
      </div>
    </div>
  );
}
