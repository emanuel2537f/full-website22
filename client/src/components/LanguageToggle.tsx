import { useLanguage } from "@/lib/LanguageContext";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border border-border rounded-md p-1">
      <Button
        variant={language === "en" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("en")}
        className="h-7 px-3 text-xs"
        data-testid="button-lang-en"
      >
        EN
      </Button>
      <Button
        variant={language === "fr" ? "secondary" : "ghost"}
        size="sm"
        onClick={() => setLanguage("fr")}
        className="h-7 px-3 text-xs"
        data-testid="button-lang-fr"
      >
        FR
      </Button>
    </div>
  );
}
