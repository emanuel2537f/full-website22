import { useEffect, useState } from "react";
import { Link } from "wouter";
// import heroBackground from "@assets/generated_images/Hero_background_gradient_0da13810.png";
const heroImages = [
  "/home-image/SmartSelect_20220805-021655_Video%20Player.jpg",
  "/home-image/SmartSelect_20220915-093836_Gallery.jpg",
];
import placeholder1 from "@assets/generated_images/Artwork_placeholder_1_6d2c0c01.png";
import placeholder2 from "@assets/generated_images/Artwork_placeholder_2_8cf1bab9.png";
import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [heroIndex, setHeroIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHeroIndex((prev) => (prev + 1) % heroImages.length);
        setFade(true);
      }, 500); // fade out duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredArtworks = [
    {
      id: 25,
      title: "Scream in theatre",
      year: "2020",
      description: "Oil on canvas, 100 x 80 cm",
      image: "/images/Screamintheatre.png",
      period: "hypo-crisis"
    },
    {
      id: 26,
      title: "The Atlase",
      year: "2021",
      description: "Oil on canvas, 110 x 200 cm",
      image: "/images/TheAtlase.png",
      period: "hypo-crisis"
    },
    {
      id: 27,
      title: "Vicious dance",
      year: "2021",
      description: "Oil on canvas, 130 x 160 cm",
      image: "/images/Viciousdance.png",
      period: "hypo-crisis"
    },
    {
      id: 28,
      title: "Apocatastasis",
      year: "2022",
      description: "Oil on canvas, 130 x 160 cm",
      image: "/images/Apocatastasis.png",
      period: "hypo-crisis"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {heroImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${heroIndex === idx && fade ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: '#222' // fallback color for debugging
            }}
          >
            {/* Fallback img for debugging */}
            <img
              src={img}
              alt="hero"
              style={{ display: 'none' }}
              onError={() => console.error('Image failed to load:', img)}
            />
          </div>
        ))}
        <div
          className={`text-center px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } z-20 relative`}
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
            Visual Artist
          </p>
        </div>
      </div>

      {/* STATEMENT SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-muted/30 rounded-md p-10 md:p-14 text-justify">
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

      {/* FEATURED ARTWORKS SECTION */}
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-2">
          <a
            href="/portfolio"
            className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md shadow hover:bg-primary/90 transition-colors text-base sm:text-lg w-full sm:w-auto text-center"
            data-testid="button-view-portfolio"
          >
            {t("home.preview.button")}
          </a>
          <a
            href="/2025 Yzo_Albi_Portfolio-eng.pdf"
            download
            className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md shadow hover:bg-primary/90 transition-colors text-base sm:text-lg w-full sm:w-auto text-center"
          >
            Download Portfolio (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
