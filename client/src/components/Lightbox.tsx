import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  year: string;
  technique: string;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export default function Lightbox({
  isOpen,
  onClose,
  imageSrc,
  title,
  year,
  technique,
  onPrevious,
  onNext,
  hasPrevious = false,
  hasNext = false,
}: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, onPrevious, onNext, hasPrevious, hasNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-white/70 transition-colors p-2"
        data-testid="button-close-lightbox"
      >
        <X size={32} />
      </button>

      {hasPrevious && onPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 text-white hover:text-white/70 transition-colors p-2"
          data-testid="button-previous"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 text-white hover:text-white/70 transition-colors p-2"
          data-testid="button-next"
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div
        className="max-w-6xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-[75vh] object-contain"
          data-testid="lightbox-image"
        />
        <div className="mt-6 text-center text-white">
          <h3 className="font-serif text-2xl mb-2" data-testid="text-artwork-title">{title}</h3>
          <p className="text-white/70" data-testid="text-artwork-details">
            {year} — {technique}
          </p>
        </div>
      </div>
    </div>
  );
}
