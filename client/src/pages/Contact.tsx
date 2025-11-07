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
  const [status, setStatus] = useState<null | { success: boolean; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    try {
  const response = await fetch("/api/contact-form-handler", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      const data = await response.json();
      setStatus({ success: data.success, message: data.message });
      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({ success: false, message: "Failed to send message. Please try again later." });
    }
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
              <p className="text-muted-foreground mb-4">
                Tirana, Vasil Shanto
              </p>
              <div className="rounded-md overflow-hidden w-full h-64">
                <iframe
                  title="Vasil Shanto Tirana Map"
                  src="https://www.google.com/maps?q=41.3242,19.8082&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Forma */}
          <div>
            <h2 className="font-serif text-2xl mb-8">{t("contact.form")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status && (
                <div className={`rounded-md p-3 mb-2 text-center text-sm ${status.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {status.message}
                </div>
              )}
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
