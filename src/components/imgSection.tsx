import img1 from '../assets/secondSec/img1.png';
import img2 from '../assets/secondSec/img2.png';
import img3 from '../assets/secondSec/img3.png';
import img4 from '../assets/secondSec/img4.png';

interface ImgSectionProps {
  images?: string[];
}

export default function ImgSection({ images }: ImgSectionProps) {
  const defaultImages = [img1, img2, img3, img4];
  const displayImages = images && images.length > 0 ? images : defaultImages;

  return (
    <section className="turu-img-section">
      <style>{`
        .turu-img-section {
          width: 100%;
          height: 280px; /* or a viewport unit like 30vh */
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          overflow: hidden;
          background-color: var(--color-bg-light);
        }
        .turu-img-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: brightness(0.95);
        }
        .turu-img-section img:hover {
          transform: scale(1.05);
          filter: brightness(1.1) saturate(1.1);
          z-index: 1;
          position: relative;
        }
        
        @media (max-width: 1024px) {
          .turu-img-section {
            grid-template-columns: repeat(2, 1fr);
            height: 400px;
          }
        }
        @media (max-width: 600px) {
          .turu-img-section {
            grid-template-columns: repeat(2, 1fr);
            height: 300px;
          }
          .turu-img-section img {
            height: 100%;
          }
        }
      `}</style>
      
      {displayImages.map((src, index) => (
        <img key={index} src={src} alt={`Showcase ${index + 1}`} />
      ))}
    </section>
  );
}
