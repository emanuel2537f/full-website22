import profileImage from "@assets/generated_images/Artist_profile_portrait_ad00c8be.png";
import { useLanguage } from "@/lib/LanguageContext";

export default function Biography() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-16 text-center"
          data-testid="text-page-title"
        >
          {t("bio.title")}
        </h1>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <img
              src={profileImage}
              alt="Albi Yzo"
              className="w-full rounded-md"
              data-testid="img-profile"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-2xl mb-4">Albi Yzo</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio-basic">
                {t("bio.born")}
                <br />
                {t("bio.lives")}
                <br />
                {t("bio.profession")}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-3">{t("bio.education")}</h3>
              <div className="space-y-2 text-muted-foreground" data-testid="text-education">
                <p>
                  <strong className="text-foreground">2022:</strong> {t("bio.edu1")}
                </p>
                <p>
                  <strong className="text-foreground">2015:</strong> {t("bio.edu2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-md p-12 md:p-16">
          <h2 className="font-serif text-3xl mb-8 text-center">
            {t("bio.statement.title")}
          </h2>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-muted-foreground" data-testid="text-statement">
            <p>
              {t("bio.statement1")}
            </p>
            <p>
              {t("bio.statement2")}
            </p>
            <p>
              {t("bio.statement3")}
            </p>
            <p>
              {t("bio.statement4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
