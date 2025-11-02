import { useState } from 'react';
import Lightbox from '../Lightbox';
import { Button } from '@/components/ui/button';
import placeholderImage from '@assets/generated_images/Artwork_placeholder_1_6d2c0c01.png';

export default function LightboxExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)} data-testid="button-open-lightbox">
        Open Lightbox
      </Button>
      <Lightbox
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageSrc={placeholderImage}
        title="Example Artwork"
        year="2024"
        technique="Oil on canvas, 100 x 80 cm"
        hasPrevious={true}
        hasNext={true}
        onPrevious={() => console.log('Previous artwork')}
        onNext={() => console.log('Next artwork')}
      />
    </div>
  );
}
