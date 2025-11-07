import { useLanguage } from "@/lib/LanguageContext";

export default function Exhibitions() {
  const { t } = useLanguage();
  const personalExhibitions = [
    {
      year: "2017",
      title: "Mythe of love",
      location: "YeReBlu Art Studio, Tirana, Albania",
    },
    {
      year: "2014",
      title: "Exposition, Journée de Patrimoine",
      location: "Metz, France",
    },
    {
      year: "2011",
      title: "Exhibition Nr 1",
      location: "Tefta Tashko Koço School, Korçë, Albania",
    },
  ];

  const collectiveExhibitions = [
    {
      year: "2023",
      title: "TE Tirana Ekspres Gallery",
      location: "Tirana, Albania",
    },
    {
      year: "2022",
      title: "MArt Live Bienale Finale",
      location: "Rome, Italy",
    },
    {
      year: "2022",
      title: "MArt Live Bienale",
      location: "Tuzla, Bosnia-Herzegovina",
    },
    {
      year: "2022",
      title: "Biseda në Gjuhën Time",
      location: "Promenadë Gallery, Vlorë, Albania",
    },
    {
      year: "2021",
      title: "RiArt",
      location: "Galeria Kalo, Tirana, Albania",
    },
    {
      year: "2021",
      title: "Arti përmes vështrimit të të rinjve",
      location: "Tirana, Albania",
    },
    {
      year: "2018",
      title: "Poetika Shqipëtare",
      location: "Tirana, Albania",
    },
    {
      year: "2016",
      title: "Atelieri I Pikturës",
      location: "Tirana, Albania",
    },
    {
      year: "2014",
      title: "Exposition Peinture / Sculpture",
      location: "Longeville-lès-Metz, France",
    },
    {
      year: "2013",
      title: "Skulptura në hapësirat publike",
      location: "Tirana, Albania",
    },
    {
      year: "2013",
      title: "Ura me Tri Harqe",
      location: "Tirana, Albania",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-4 text-center"
          data-testid="text-page-title"
        >
          {t("exhibitions.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          {t("exhibitions.subtitle")}
        </p>

        <section className="mb-20">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
            {t("exhibitions.personal")}
          </h2>
          <div className="space-y-8">
            {personalExhibitions.map((exhibition, index) => (
              <div
                key={index}
                className="border-l-2 border-primary pl-8 pb-8 relative"
                data-testid={`exhibition-personal-${index}`}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="text-xs text-primary font-semibold mb-1" data-testid="text-exhibition-year">
                  {exhibition.year}
                </div>
                <h3 className="font-serif text-lg mb-1" data-testid="text-exhibition-title">
                  {exhibition.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-exhibition-location">
                  {exhibition.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-12">
            {t("exhibitions.collective")}
          </h2>
          <div className="space-y-8">
            {collectiveExhibitions.map((exhibition, index) => (
              <div
                key={index}
                className="border-l-2 border-muted pl-8 pb-8 relative"
                data-testid={`exhibition-collective-${index}`}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                <div className="text-xs text-muted-foreground font-semibold mb-1" data-testid="text-exhibition-year">
                  {exhibition.year}
                </div>
                <h3 className="font-serif text-lg mb-1" data-testid="text-exhibition-title">
                  {exhibition.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid="text-exhibition-location">
                  {exhibition.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
