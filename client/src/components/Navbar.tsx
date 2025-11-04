import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { path: "/", label: "nav.home" },
    { path: "/portfolio", label: "nav.portfolio" },
    { path: "/biography", label: "nav.biography" },
    { path: "/exhibitions", label: "nav.exhibitions" },
    { path: "/contact", label: "nav.contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <span className="font-serif text-2xl font-semibold tracking-wide cursor-pointer hover-elevate px-2 py-1 rounded-md transition-colors">
              ALBI YZO
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-nav-${t(link.label).toLowerCase()}`}>
                <span
                  className={`text-sm font-sans tracking-wide cursor-pointer transition-all relative pb-1 ${
                    location === link.path
                      ? "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(link.label)}
                </span>
              </Link>
            ))}
            <LanguageToggle />
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover-elevate rounded-md"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} data-testid={`link-mobile-${t(link.label).toLowerCase()}`}>
                <div
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded-md cursor-pointer transition-colors ${
                    location === link.path
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  {t(link.label)}
                </div>
              </Link>
            ))}
            <div className="pt-2 flex justify-center">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
