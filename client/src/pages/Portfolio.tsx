import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import Lightbox from "@/components/Lightbox";
import { useLanguage } from "@/lib/LanguageContext";

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
  const { t } = useLanguage();

  const artworks: Artwork[] = [
    // ---------------- SCHOOL PERIOD ----------------
  // ---------------- SCHOOL PERIOD ----------------
  { id: 1, title: "The portrait of Flori", year: "2012", technique: "Carbon on paper, 100 x 70 cm", imageSrc: "/images/the-portrait-of-flori.png", period: "school" },
  { id: 2, title: "The portrait of Kola", year: "2013", technique: "Pencil on paper, 100 x 70 cm", imageSrc: "/images/The portrait of Kola .png", period: "school" },
  { id: 3, title: "Woman figure", year: "2013", technique: "Pencil on paper, 100 x 70 cm", imageSrc: "/images/Woman-figure.png", period: "school" },
  { id: 4, title: "Boy figure", year: "2013", technique: "Carbon on paper, 100 x 70 cm", imageSrc: "/images/Boyfigure.png", period: "school" },
  { id: 5, title: "Moving figure", year: "2013", technique: "Carbon on paper, 90 x 70 cm", imageSrc: "/images/Movingfigure.png", period: "school" },
  { id: 6, title: "Nature morte", year: "2013", technique: "Carbon’s pencil on paper, 90 x 70 cm", imageSrc: "/images/Naturemorte.png", period: "school" },
  { id: 7, title: "The Portrait of Mariane", year: "2013", technique: "Oil on canvas, 80 x 60 cm", imageSrc: "/images/ThePortraitofMariane.png", period: "school" },
  { id: 8, title: "The Portrait of Aishe", year: "2013", technique: "Oil on canvas, 80 x 60 cm", imageSrc: "/images/ThePortraitofAishe.png", period: "school" },
  { id: 9, title: "Self-Portrait", year: "2013", technique: "Oil on canvas, 90 x 70 cm", imageSrc: "/images/Self-Portrait.png", period: "school" },
  { id: 10, title: "Adam and Eve", year: "2017", technique: "Oil on canvas, 170 x 130 cm", imageSrc: "/images/AdamandEve.png", period: "school" },
  { id: 11, title: "Laocoon", year: "2018", technique: "Oil on canvas, 90 x 70 cm", imageSrc: "/images/Laocoon.png", period: "school" },
  { id: 12, title: "Outstretched figure", year: "2013", technique: "Oil on canvas, 140 x 110 cm", imageSrc: "/images/Outstretchedfigure.png", period: "school" },
  { id: 13, title: "Women figure", year: "2013", technique: "Oil on canvas, 110 x 90 cm", imageSrc: "/images/Womenfigure.png", period: "school" },
  { id: 14, title: "The environment around me", year: "2016", technique: "Oil on canvas, 110 x 75 cm", imageSrc: "/images/Theenvironmentaroundme.png", period: "school" },
  { id: 15, title: "Dyptic, Skanderbeg square, Paris", year: "2018", technique: "Oil on canvas, 160 x 100 cm", imageSrc: "/images/Dyptic,Skanderbegsquare,Paris.png", period: "school" },
  { id: 16, title: "The circus", year: "2016", technique: "Oil on canvas, 100 x 80 cm", imageSrc: "/images/Thecircus.png", period: "school" },
  { id: 17, title: "Tirana’s lake", year: "2012", technique: "Arabic gum on paper, 31 x 21 cm", imageSrc: "/images/Tirana’slake.png", period: "school" },
  { id: 18, title: "Landscape, Old Home", year: "2014", technique: "Oil on canvas, 60 x 50 cm", imageSrc: "/images/Landscape,Old-Home.png", period: "school" },
  { id: 19, title: "Landscape, Metz, Fr", year: "2014", technique: "Oil on canvas, 50 x 50 cm", imageSrc: "/images/Landscape,Metz,Fr.png", period: "school" },
  { id: 20, title: "Landscape, Paper boats", year: "2017", technique: "Acrylic and oil on canvas, 60 x 50 cm", imageSrc: "/images/Landscape,Paperboats.png", period: "school" },
  { id: 21, title: "Mother portrait", year: "2014", technique: "Oil on canvas, 55 x 42 cm", imageSrc: "/images/Motherportrait.png", period: "school" },
  { id: 22, title: "Father portrait", year: "2014", technique: "Oil on canvas, 70 x 50 cm", imageSrc: "/images/Fatherportrait.png", period: "school" },

  // ---------------- GAMES SERIES ----------------
  { id: 23, title: "Games, Pathos", year: "2019", technique: "Oil on canvas, 102 x 93 cm", imageSrc: "/images/Games,Pathos.png", period: "games" },
  { id: 24, title: "Games, Two cars", year: "2019", technique: "Oil on canvas, 98 x 93 cm", imageSrc: "/images/Games,Twocars.png", period: "games" },

  // ---------------- HYPO-CRISIS SERIES ----------------
  { id: 25, title: "Scream in theatre", year: "2020", technique: "Oil on canvas, 100 x 80 cm", imageSrc: "/images/Screamintheatre.png", period: "hypo-crisis" },
  { id: 26, title: "The Atlase", year: "2021", technique: "Oil on canvas, 110 x 200 cm", imageSrc: "/images/TheAtlase.png", period: "hypo-crisis" },
  { id: 27, title: "Vicious dance", year: "2021", technique: "Oil on canvas, 130 x 160 cm", imageSrc: "/images/Viciousdance.png", period: "hypo-crisis" },
  { id: 28, title: "Apocatastasis", year: "2022", technique: "Oil on canvas, 130 x 160 cm", imageSrc: "/images/Apocatastasis.png", period: "hypo-crisis" },
  { id: 29, title: "The traces", year: "2022", technique: "Oil on canvas, 160 x 275 cm", imageSrc: "/images/Thetraces.png", period: "hypo-crisis" },
  { id: 30, title: "The nostalgie", year: "2022", technique: "Oil on canvas, 83 x 103 cm", imageSrc: "/images/Thenostalgie.png", period: "hypo-crisis" },
  { id: 31, title: "Three figures", year: "2023", technique: "Oil on canvas, 115 x 150 cm", imageSrc: "/images/Threefigures.png", period: "hypo-crisis" },
  { id: 32, title: "Hypo-Crisis", year: "2024", technique: "Oil on canvas, 110 x 180 cm", imageSrc: "/images/Hypo-Crisis .png", period: "hypo-crisis" },
  { id: 33, title: "Laocoon", year: "2024", technique: "Oil on canvas, 100 x 130 cm", imageSrc: "/images/Laocoon.png", period: "hypo-crisis" },
  { id: 34, title: "The light on the chavalet", year: "2024", technique: "Oil on canvas, 90 x 120 cm", imageSrc: "/images/Thelightonthechavalet.png", period: "hypo-crisis" },
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
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-4 text-center" data-testid="text-page-title">
          {t("portfolio.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          {t("portfolio.subtitle")}
        </p>

        {/* SCHOOL PERIOD */}
        <section className="mb-24">
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light">{t("portfolio.school")}</h2>
            <p className="text-muted-foreground mt-2">{t("portfolio.school.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {schoolPeriod.map((artwork) => (
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

        {/* GAMES SERIES */}
        <section className="mb-24">
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light">{t("portfolio.games")}</h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">{t("portfolio.games.desc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {gamesSeries.map((artwork) => (
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

        {/* HYPO-CRISIS SERIES */}
        <section>
          <div className="bg-muted/30 py-6 px-8 rounded-md mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light">{t("portfolio.hypocrisis")}</h2>
            <p className="text-muted-foreground mt-3 max-w-3xl">{t("portfolio.hypocrisis.desc")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {hypoCrisisSeries.map((artwork) => (
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

      {/* LIGHTBOX */}
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
        onNext={() => setSelectedArtworkIndex((prev) => Math.min(artworks.length - 1, prev + 1))}
      />
    </div>
  );
}
