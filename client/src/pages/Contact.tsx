import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t("contact.success"));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-4 text-center"
          data-testid="text-page-title"
        >
          {t("contact.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-2xl mb-8">{t("contact.info")}</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-primary" size={24} />
                <div>
                  <p className="font-semibold mb-1">{t("contact.email")}</p>
                  <a
                    href="mailto:albiyzo@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-email"
                  >
                    albiyzo@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-primary" size={24} />
                <div>
                  <p className="font-semibold mb-1">{t("contact.phone")}</p>
                  <a
                    href="tel:+355692573658"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-phone"
                  >
                    +355 69 25 73 658
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 rounded-md p-8">
              <h3 className="font-serif text-xl mb-4">{t("contact.location")}</h3>
              <p className="text-muted-foreground">
                {t("contact.location.value")}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-8">{t("contact.form")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder={t("contact.name.placeholder")}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  placeholder={t("contact.email.placeholder")}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
                  placeholder={t("contact.message.placeholder")}
                  required
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                data-testid="button-submit"
              >
                {t("contact.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
