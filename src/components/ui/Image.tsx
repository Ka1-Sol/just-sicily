import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const Image = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = 'https://placehold.co/800x500/0066CC/FFFFFF?text=JustSicily'
}: ImageProps) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default Image; 