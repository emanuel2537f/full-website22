import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.portfolio": "Portfolio",
    "nav.biography": "Biography",
    "nav.exhibitions": "Exhibitions",
    "nav.contact": "Contact",
    
    // Home
    "home.subtitle": "Visual Artist – Tirana, Albania",
    "home.quote": "To create in our contemporary era means to preserve the essence of oneself.",
    "home.statement1": "To create in our contemporary era, according to my opinion it means to be committed in selecting different forms of expressing but always preserving the essence of oneself, so that his energy is distributed at the right time and space.",
    "home.statement2": "Art to me is the ability to produce artworks, that society will put in the service of its aesthetic and cultural improvement.",
    "home.statement3": "In my creations is clearly seen my interest in beauty, my ontological search for the innovation, the undeniable heterogeneity and the love for the sublime.",
    "home.preview.title": "Portfolio Preview",
    "home.preview.button": "View Full Portfolio",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Selected works 2012–2024",
    "portfolio.school": "School Period (2012–2014)",
    "portfolio.school.subtitle": "Selected works",
    "portfolio.games": "Games Series (2019)",
    "portfolio.games.desc": "This cycle of paintings is about 7 final works realized in the technique of oil painting on fabric, where images, feelings and experiences of the games that I spent in my childhood are symbolically presented.",
    "portfolio.hypocrisis": "Hypo-Crisis Series (2020–2024)",
  "portfolio.hypocrisis.desc": `
What is Hypo-Crisis?
Hypo-Crisis is a series of paintings started in 2020, soon coming to an end. This series features large canvases offering a clear and different vision of our contemporary reality. The works address themes inspired by daily life, architecture, as well as sociopolitical and cultural events of our time, especially those of my country.

Through this series, I express my reflections on a better world and a more vigilant society towards everything that surrounds us. My works address philosophical subjects while remaining anchored in daily reality. In my paintings, I propose a different vision of the beauty and reality that surrounds me.

As a painter, I also manifest my sublime pleasure for art through this work. I observe a crisis of ontological thought in individuals nowadays, but I believe there is always a path towards which man can direct his future. Art could serve as a bridge to lead humanity from our current society to a cathartic one.

For this, we must reflect and find harmony between the space and time in which we live. When I paint, I feel neither space nor time, which allows me total freedom to transform my thoughts into images and create my paintings.
`,
    
    // Biography
    "bio.title": "Biography",
    "bio.born": "Born in Korçë, Albania, 1993",
    "bio.lives": "Lives and works in Tirana",
    "bio.profession": "Visual Artist",
    "bio.education": "Education",
    "bio.edu1": "MA (Master of Arts), University of Arts, Tirana, Albania",
    "bio.edu2": "Licence 1, University of Lorraine – Faculty of Plastic Arts, Metz, France",
    "bio.statement.title": "Artist Statement",
    "bio.statement1": "To create in our contemporary era, according to my opinion it means to be committed in selecting different forms of expressing but always preserving the essence of oneself, so that his energy is distributed at the right time and space.",
    "bio.statement2": "Art to me is the ability to produce artworks, that society will put in the service of its aesthetic and cultural improvement.",
    "bio.statement3": "In my creations is clearly seen my interest in beauty, my ontological search for the innovation, the undeniable heterogeneity and the love for the sublime.",
    "bio.statement4": "Balance and harmony between them constitutes what may be the artistic character of my work.",
    
    // Exhibitions
    "exhibitions.title": "Exhibitions",
    "exhibitions.subtitle": "Selected exhibitions and activities",
    "exhibitions.personal": "Personal Exhibitions",
    "exhibitions.collective": "Collective Exhibitions",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Get in touch",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.location.value": "Tirana, Albania",
    "contact.form": "Send a Message",
    "contact.name": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email.placeholder": "your.email@example.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Your message...",
    "contact.submit": "Send Message",
    "contact.success": "Thank you for your message! (This is a visual demo - no data is sent)",
    
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.designed": "Designed by EAI DEV",
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.portfolio": "Portfolio",
    "nav.biography": "Biographie",
    "nav.exhibitions": "Expositions",
    "nav.contact": "Contact",
    
    // Home
    "home.subtitle": "Artiste Visuel – Tirana, Albanie",
    "home.quote": "Créer à notre époque contemporaine signifie préserver l'essence de soi-même.",
    "home.statement1": "Créer à notre époque contemporaine, selon mon opinion, signifie s'engager à sélectionner différentes formes d'expression tout en préservant toujours l'essence de soi-même, afin que son énergie soit distribuée au bon moment et au bon endroit.",
    "home.statement2": "L'art pour moi est la capacité de produire des œuvres d'art que la société mettra au service de son amélioration esthétique et culturelle.",
    "home.statement3": "Dans mes créations, on voit clairement mon intérêt pour la beauté, ma recherche ontologique de l'innovation, l'hétérogénéité indéniable et l'amour du sublime.",
    "home.preview.title": "Aperçu du Portfolio",
    "home.preview.button": "Voir le Portfolio Complet",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Œuvres sélectionnées 2012–2024",
    "portfolio.school": "Période Scolaire (2012–2014)",
    "portfolio.school.subtitle": "Œuvres sélectionnées",
    "portfolio.games": "Série Games (2019)",
    "portfolio.games.desc": "Ce cycle de peintures comprend 7 œuvres finales réalisées en technique de peinture à l'huile sur tissu, où des images, des sentiments et des expériences des jeux que j'ai passés dans mon enfance sont présentés symboliquement.",
    "portfolio.hypocrisis": "Série Hypo-Crisis (2020–2024)",
  "portfolio.hypocrisis.desc": `
Qu’est-ce que Hypo-Crisis?
Hypo-Crisis est une série de peintures commencée en 2020, qui touche bientôt à sa fin. Cette série présente de grands tableaux offrant une vision claire et différente de notre réalité contemporaine. Les œuvres abordent des thèmes inspirés de la vie quotidienne, de l'architecture, ainsi que des événements sociopolitiques et culturels de notre époque, en particulier ceux de mon pays.

À travers cette série, j’exprime mes réflexions sur un monde meilleur et une société plus vigilante face à tout ce qui nous entoure. Mes œuvres abordent des sujets philosophiques tout en restant ancrées dans la réalité quotidienne. Dans mes tableaux, je propose une vision différente de la beauté et de la réalité qui m’entoure.

En tant qu'artiste peintre, je manifeste également mon plaisir sublime pour l'art à travers ce travail. Je constate une crise de la pensée ontologique chez l’individu de nos jours, mais je crois qu'il existe toujours un chemin vers lequel l’homme peut orienter son futur. L’art pourrait servir de pont pour mener l’humanité de notre société actuelle à une société cathartique.

Pour cela, nous devons réfléchir et trouver l’harmonie entre l’espace et le temps dans lesquels nous vivons. Lorsque je peins, je ne ressens ni l’espace ni le temps, ce qui me permet une liberté totale pour transformer mes pensées en images et créer mes tableaux.
`,
    
    // Biography
    "bio.title": "Biographie",
    "bio.born": "Né à Korçë, Albanie, 1993",
    "bio.lives": "Vit et travaille à Tirana",
    "bio.profession": "Artiste Visuel",
    "bio.education": "Formation",
    "bio.edu1": "MA (Master d'Arts), Université des Arts, Tirana, Albanie",
    "bio.edu2": "Licence 1, Université de Lorraine – Faculté d'Arts Plastiques, Metz, France",
    "bio.statement.title": "Déclaration d'Artiste",
    "bio.statement1": "Créer à notre époque contemporaine, selon mon opinion, signifie s'engager à sélectionner différentes formes d'expression tout en préservant toujours l'essence de soi-même, afin que son énergie soit distribuée au bon moment et au bon endroit.",
    "bio.statement2": "L'art pour moi est la capacité de produire des œuvres d'art que la société mettra au service de son amélioration esthétique et culturelle.",
    "bio.statement3": "Dans mes créations, on voit clairement mon intérêt pour la beauté, ma recherche ontologique de l'innovation, l'hétérogénéité indéniable et l'amour du sublime.",
    "bio.statement4": "L'équilibre et l'harmonie entre eux constituent ce qui peut être le caractère artistique de mon travail.",
    
    // Exhibitions
    "exhibitions.title": "Expositions",
    "exhibitions.subtitle": "Expositions et activités sélectionnées",
    "exhibitions.personal": "Expositions Personnelles",
    "exhibitions.collective": "Expositions Collectives",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Prenez contact",
    "contact.info": "Informations de Contact",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.location": "Localisation",
    "contact.location.value": "Tirana, Albanie",
    "contact.form": "Envoyer un Message",
    "contact.name": "Nom",
    "contact.name.placeholder": "Votre nom",
    "contact.email.placeholder": "votre.email@exemple.com",
    "contact.message": "Message",
    "contact.message.placeholder": "Votre message...",
    "contact.submit": "Envoyer le Message",
    "contact.success": "Merci pour votre message ! (Ceci est une démo visuelle - aucune donnée n'est envoyée)",
    
    // Footer
    "footer.rights": "Tous droits réservés.",
    "footer.designed": "Conçu par EAI DEV",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
