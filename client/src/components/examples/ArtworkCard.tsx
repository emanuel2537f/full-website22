import ArtworkCard from '../ArtworkCard';
import placeholderImage from '@assets/generated_images/Artwork_placeholder_1_6d2c0c01.png';

export default function ArtworkCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ArtworkCard
        imageSrc={placeholderImage}
        title="The Portrait of Flori"
        year="2012"
        technique="Carbon on paper, 100 x 70 cm"
        onClick={() => console.log('Artwork clicked')}
      />
    </div>
  );
}
