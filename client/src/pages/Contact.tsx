import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
export default function Contact() {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xvgdpwno");

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
                  >albiyzo@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-primary" size={24} />
                <div>
                  <p className="font-semibold mb-1">{t("contact.phone")}</p>
                  <a href="tel:+355692222222" className="text-muted-foreground hover:text-foreground transition-colors">+355 69 222 2222</a>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://www.facebook.com/albiyzo" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
                </a>
                <a href="https://www.instagram.com/albiyzo" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={32} className="text-pink-500 hover:text-pink-700 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/albiyzo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={32} className="text-blue-700 hover:text-blue-900 transition-colors" />
                </a>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0000000000005!2d19.818000000000003!3d41.32750000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310c0c0c0c0c%3A0x0c0c0c0c0c0c0c0c!2sTirana!5e0!3m2!1sen!2s!4v1660000000000!5m2!1sen!2s"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
          {/* Forma me Formspree */}
          <div>
            <h2 className="font-serif text-2xl mb-8">{t("contact.form")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="your.email@example.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Your message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button type="submit" disabled={state.submitting} className="w-full bg-blue-300 text-black py-3 rounded-md">
                Send Message
              </Button>
              {state.succeeded && (
                <p className="text-green-600 mt-4">Mesazhi u dërgua me sukses!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

