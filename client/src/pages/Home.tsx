import { useEffect, useState } from "react";
import { Link } from "wouter";
import heroBackground from "@assets/generated_images/Hero_background_gradient_0da13810.png";
import placeholder1 from "@assets/generated_images/Artwork_placeholder_1_6d2c0c01.png";
import placeholder2 from "@assets/generated_images/Artwork_placeholder_2_8cf1bab9.png";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredArtworks = [
    {
      id: 1,
      title: "The Checkerboard",
      description: "Oil on canvas, 100×120 cm",
      image: placeholder1,
      year: "2019",
    },
    {
      id: 2,
      title: "Illusion and Life",
      description: "Oil on canvas, 80×100 cm",
      image: placeholder2,
      year: "2021",
    },
    {
      id: 3,
      title: "Untitled",
      description: "Oil on canvas, 50×60 cm",
      image: placeholder1,
      year: "2013",
    },
    {
      id: 4,
      title: "The Game",
      description: "Oil on canvas, 120×150 cm",
      image: placeholder2,
      year: "2019",
    },
  ];

  return (
    <div className="min-h-screen">
      <div
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`text-center px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="font-serif text-6xl md:text-8xl font-light text-white mb-4 tracking-wider"
            data-testid="text-hero-title"
          >
            ALBI YZO
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 font-light tracking-wide"
            data-testid="text-hero-subtitle"
          >
            {t("home.subtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <blockquote
          className="text-center font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/90"
          data-testid="text-quote"
        >
          "{t("home.quote")}"
        </blockquote>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-muted/30 rounded-md p-10 md:p-14">
          <p className="font-sans text-lg leading-relaxed mb-6 text-muted-foreground">
            {t("home.statement1")}
          </p>
          <p className="font-sans text-lg leading-relaxed mb-6 text-muted-foreground">
            {t("home.statement2")}
          </p>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">
            {t("home.statement3")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12" data-testid="text-preview-title">
          {t("home.preview.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredArtworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
              data-testid={`card-artwork-${artwork.id}`}
            >
              <div className="relative overflow-hidden rounded-md mb-4 bg-muted/20">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-artwork-${artwork.id}`}
                />
              </div>
              <h3 className="font-serif text-lg mb-1" data-testid={`text-title-${artwork.id}`}>
                {artwork.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1" data-testid={`text-desc-${artwork.id}`}>
                {artwork.description}
              </p>
              <p className="text-xs text-muted-foreground" data-testid={`text-year-${artwork.id}`}>
                {artwork.year}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="default"
              className="px-8"
              data-testid="button-view-portfolio"
            >
              {t("home.preview.button")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
