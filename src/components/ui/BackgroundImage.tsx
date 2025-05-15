import { useEffect, useState } from 'react';

interface BackgroundImageProps {
  src: string;
  fallbackSrc?: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundImage = ({
  src,
  fallbackSrc = 'https://placehold.co/1200x800/0066CC/FFFFFF?text=JustSicily',
  className = '',
  children
}: BackgroundImageProps) => {
  const [bgImageSrc, setBgImageSrc] = useState(src);

  useEffect(() => {
    // Verifica se l'immagine è caricabile
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setBgImageSrc(src);
    };
    
    img.onerror = () => {
      console.log('Image failed to load:', src);
      setBgImageSrc(fallbackSrc);
    };
  }, [src, fallbackSrc]);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${bgImageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage; 