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

    // krijojmë mesazhin që do hapet në email
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // hap direkt Gmail-in ose klientin e emailit të përdoruesit
    window.location.href = `mailto:klajdipupa21@gmail.com?subject=${subject}&body=${body}`;

    // pastrojmë fushat
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="font-serif text-5xl md:text-6xl font-light mb-4 text-center">
          {t("contact.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          {t("contact.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kontakt info */}
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
                  >
                    +355 69 25 73 658
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 rounded-md p-8">
              <h3 className="font-serif text-xl mb-4">
                {t("contact.location")}
              </h3>
              <p className="text-muted-foreground">
                {t("contact.location.value")}
              </p>
            </div>
          </div>

          {/* Forma */}
          <div>
            <h2 className="font-serif text-2xl mb-8">{t("contact.form")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
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
                />
              </div>
              <Button type="submit" className="w-full">
                {t("contact.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
