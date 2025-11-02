import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import Lightbox from "@/components/Lightbox";
import placeholder1 from "@assets/generated_images/Artwork_placeholder_1_6d2c0c01.png";
import placeholder2 from "@assets/generated_images/Artwork_placeholder_2_8cf1bab9.png";

interface Artwork {
  id: number;
  title: string;
  year: string;
  technique: string;
  imageSrc: string;
  period: string;
}

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(0);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "The portrait of Flori",
      year: "2012",
      technique: "Carbon on paper, 100 x 70 cm",
      imageSrc: placeholder1,
      period: "school",
    },
    {
      id: 2,
      title: "The portrait of Kola",
      year: "2013",
      technique: "Pencil on paper, 100 x 70 cm",
      imageSrc: placeholder2,
      period: "school",
    },
    {
      id: 3,
      title: "Woman figure",
      year: "2013",
      technique: "Pencil on paper, 100 x 70 cm",
      imageSrc: placeholder1,
      period: "school",
    },
    {
      id: 4,
      title: "Boy figure",
      year: "2013",
      technique: "Carbon on paper, 100 x 70 cm",
      imageSrc: placeholder2,
      period: "school",
    },
    {
      id: 5,
      title: "Moving figure",
      year: "2013",
      technique: "Carbon on paper, 90 x 70 cm",
      imageSrc: placeholder1,
      period: "school",
    },
    {
      id: 6,
      title: "Nature morte",
      year: "2013",
      technique: "Carbon's pencil on paper, 90 x 70 cm",
      imageSrc: placeholder2,
      period: "school",
    },
    {
      id: 7,
      title: "The Portrait of Mariane",
      year: "2013",
      technique: "Oil on canvas, 80 x 60 cm",
      imageSrc: placeholder1,
      period: "school",
    },
    {
      id: 8,
      title: "Self-Portrait",
      year: "2013",
      technique: "Oil on canvas, 90 x 70 cm",
      imageSrc: placeholder2,
      period: "school",
    },
    {
      id: 9,
      title: "Adam and Eve",
      year: "2017",
      technique: "Oil on canvas, 170 x 130 cm",
      imageSrc: placeholder1,
      period: "school",
    },
    {
      id: 10,
      title: "Laocoon",
      year: "2018",
      technique: "Oil on canvas, 90 x 70 cm",
      imageSrc: placeholder2,
      period: "school",
    },
    {
      id: 11,
      title: "Games, Pathos",
      year: "2019",
      technique: "Oil on canvas, 102 x 93 cm",
      imageSrc: placeholder1,
      period: "games",
    },
    {
      id: 12,
      title: "Games, Two cars",
      year: "2019",
      technique: "Oil on canvas, 98 x 93 cm",
      imageSrc: placeholder2,
      period: "games",
    },
    {
      id: 13,
      title: "Scream in theatre",
      year: "2020",
      technique: "Oil on canvas, 100 x 80 cm",
      imageSrc: placeholder1,
      period: "hypo-crisis",
    },
    {
      id: 14,
      title: "The Atlase",
      year: "2021",
      technique: "Oil on canvas, 110 x 200 cm",
      imageSrc: placeholder2,
      period: "hypo-crisis",
    },
    {
      id: 15,
      title: "Vicious dance",
      year: "2021",
      technique: "Oil on canvas, 130 x 160 cm",
      imageSrc: placeholder1,
      period: "hypo-crisis",
    },
    {
      id: 16,
      title: "Apocatastasis",
      year: "2022",
      technique: "Oil on canvas, 130 x 160 cm",
      imageSrc: placeholder2,
      period: "hypo-crisis",
    },
    {
      id: 17,
      title: "The traces",
      year: "2022",
      technique: "Oil on canvas, 160 x 275 cm",
      imageSrc: placeholder1,
      period: "hypo-crisis",
    },
    {
      id: 18,
      title: "The nostalgie",
      year: "2022",
      technique: "Oil on canvas, 83 x 103 cm",
      imageSrc: placeholder2,
      period: "hypo-crisis",
    },
    {
      id: 19,
      title: "Three figures",
      year: "2023",
      technique: "Oil on canvas, 115 x 150 cm",
      imageSrc: placeholder1,
      period: "hypo-crisis",
    },
    {
      id: 20,
      title: "Hypo-Crisis",
      year: "2024",
      technique: "Oil on canvas, 110 x 180 cm",
      imageSrc: placeholder2,
      period: "hypo-crisis",
    },
  ];

  const schoolPeriod = artworks.filter((a) => a.period === "school");
  const gamesSeries = artworks.filter((a) => a.period === "games");
  const hypoCrisisSeries = artworks.filter((a) => a.period === "hypo-crisis");

  const openLightbox = (index: number) => {
    setSelectedArtworkIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-4 text-center"
          data-testid="text-page-title"
        >
          Portfolio
        </h1>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          Selected works 2012–2024
        </p>

        <section className="mb-24">
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light" data-testid="text-section-title">
              School Period (2012–2014)
            </h2>
            <p className="text-muted-foreground mt-2">Selected works</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {schoolPeriod.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                imageSrc={artwork.imageSrc}
                title={artwork.title}
                year={artwork.year}
                technique={artwork.technique}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light" data-testid="text-section-title">
              Games Series (2019)
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">
              This cycle of paintings is about 7 final works realized in the
              technique of oil painting on fabric, where images, feelings and
              experiences of the games that I spent in my childhood are
              symbolically presented.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {gamesSeries.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                imageSrc={artwork.imageSrc}
                title={artwork.title}
                year={artwork.year}
                technique={artwork.technique}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light" data-testid="text-section-title">
              Hypo-Crisis Series (2020–2024)
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">
              This series of paintings began in 2020 and was inspired by the
              daily life, architecture, socio-political and cultural events of
              our time and especially of my country.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {hypoCrisisSeries.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                imageSrc={artwork.imageSrc}
                title={artwork.title}
                year={artwork.year}
                technique={artwork.technique}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </section>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={artworks[selectedArtworkIndex].imageSrc}
        title={artworks[selectedArtworkIndex].title}
        year={artworks[selectedArtworkIndex].year}
        technique={artworks[selectedArtworkIndex].technique}
        hasPrevious={selectedArtworkIndex > 0}
        hasNext={selectedArtworkIndex < artworks.length - 1}
        onPrevious={() => setSelectedArtworkIndex((prev) => Math.max(0, prev - 1))}
        onNext={() =>
          setSelectedArtworkIndex((prev) => Math.min(artworks.length - 1, prev + 1))
        }
      />
    </div>
  );
}
