import React, { useEffect } from "react";

interface GalleryModalProps {
  images: { src: string; alt: string }[];
  activeIndex: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  activeIndex,
  onClose,
  onChangeIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    onChangeIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    onChangeIndex(nextIndex);
  };

  const handleThumbnailClick = (index: number) => {
    onChangeIndex(index);
  };

  return (
    <div
      className="modal"
      tabIndex={-1}
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.9)",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
      }}
    >
      <div
        className="modal-dialog"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          margin: 0,
          padding: "20px",
        }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: "transparent",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <div className="modal-header"> <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button></div>
          <div
            className="modal-body"
            style={{
              padding: 0,
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Główny obrazek */}
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              style={{
                maxWidth: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Kontrolki nawigacyjne */}
          <div
            className="carousel-controls"
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              display: "flex",
              justifyContent: "space-between",
              zIndex: 10,
              transform: "translateY(-50%)",
            }}
          >
            <button
              onClick={handlePrev}
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "0.7em 0.7em",
                border: "none",
                fontSize: "2rem",
                color: "white",
                cursor: "pointer",
              }}
            >
              &#10094;
            </button>
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: "0.7em 0.7em",
                border: "none",
                fontSize: "2rem",
                color: "white",
                cursor: "pointer",
              }}
            >
              &#10095;
            </button>
          </div>

          {/* Miniaturki */}
          <div
            className="thumbnail-container"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              overflowX: "auto",
              paddingBottom: "1rem",
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  cursor: "pointer",
                  margin: "0 5px",
                  border:
                    index === activeIndex
                      ? "2px solid #007bff"
                      : "2px solid transparent",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
