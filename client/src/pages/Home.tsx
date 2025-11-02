import { useEffect, useState } from "react";
import heroBackground from "@assets/generated_images/Hero_background_gradient_0da13810.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            Visual Artist – Tirana, Albania
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <blockquote
          className="text-center font-serif text-2xl md:text-3xl italic leading-relaxed text-foreground/90"
          data-testid="text-quote"
        >
          "To create in our contemporary era means to preserve the essence of
          oneself."
        </blockquote>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-muted/30 rounded-md p-12 md:p-16">
          <p className="font-sans text-lg leading-relaxed mb-6 text-muted-foreground">
            To create in our contemporary era, according to my opinion it means
            to be committed in selecting different forms of expressing but always
            preserving the essence of oneself, so that his energy is distributed
            at the right time and space.
          </p>
          <p className="font-sans text-lg leading-relaxed mb-6 text-muted-foreground">
            Art to me is the ability to produce artworks, that society will put
            in the service of its aesthetic and cultural improvement.
          </p>
          <p className="font-sans text-lg leading-relaxed text-muted-foreground">
            In my creations is clearly seen my interest in beauty, my ontological
            search for the innovation, the undeniable heterogeneity and the love
            for the sublime.
          </p>
        </div>
      </div>
    </div>
  );
}
