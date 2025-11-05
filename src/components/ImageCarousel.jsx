import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ 
  images = [], 
  interval = 1500, 
  animationDuration = 1000,
  height = "400px",
  width = "100%",
  showDots = true,
  showTimer = true 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval, animationDuration]);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, animationDuration / 2);
  };

  if (!images || images.length === 0) {
    return (
      <div className="image-carousel" style={{ height, width }}>
        <div className="carousel-error">No images provided</div>
      </div>
    );
  }

  return (
    <div className="image-carousel" style={{ height, width }}>
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            } ${isTransitioning ? 'transitioning' : ''}`}
            style={{
              backgroundImage: `url(${image.src})`,
              animationDuration: `${animationDuration}ms`,
              zIndex: index === currentIndex ? 2 : 1
            }}
          >
            <div className="slide-overlay">
              <h3 className="slide-title">{image.title}</h3>
              <p className="slide-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Timer Indicator */}
      {showTimer && (
        <div className="timer-indicator">
          <div 
            className="timer-progress" 
            style={{ 
              animationDuration: `${interval}ms`,
              animationPlayState: isTransitioning ? 'paused' : 'running'
            }}
          />
        </div>
      )}

      {/* Dots Indicator */}
      {showDots && images.length > 1 && (
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="slide-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;