import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface AdItem {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

interface ImageCarouselProps {
  ads: AdItem[];
  /** Auto-play interval in milliseconds. Default: 4000 */
  interval?: number;
}

export default function ImageCarousel({ ads, interval = 4000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const total = ads.length;

  const goTo = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goNext = useCallback(() => {
    goTo((current + 1) % total, 'next');
  }, [current, total, goTo]);

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total, 'prev');
  }, [current, total, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(goNext, interval);
    return () => clearInterval(timer);
  }, [isPaused, goNext, interval, total]);

  if (total === 0) return null;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="carousel-viewport">
        {ads.map((ad, i) => (
          <a
            key={i}
            href={ad.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`carousel-slide ${
              i === current ? 'carousel-slide--active' : ''
            } ${
              i === current
                ? direction === 'next'
                  ? 'carousel-slide--enter-next'
                  : 'carousel-slide--enter-prev'
                : ''
            }`}
            aria-hidden={i !== current}
            tabIndex={i === current ? 0 : -1}
          >
            <img
              src={ad.imageUrl}
              alt={ad.altText}
              className="carousel-image"
              draggable={false}
            />
          </a>
        ))}
      </div>

      {/* Arrow buttons */}
      {total > 1 && (
        <>
          <button
            onClick={goPrev}
            className="carousel-arrow carousel-arrow--left"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            className="carousel-arrow carousel-arrow--right"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {total > 1 && (
        <div className="carousel-dots">
          {ads.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              className={`carousel-dot ${i === current ? 'carousel-dot--active' : ''}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
