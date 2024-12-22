import React, { useState } from "react";
import GalleryModal from "./modal/GalleryModal.js";

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "src/image/project-1-1200x800.jpg", alt: "White City Lofts" },
    { src: "src/image/project-2-1200x800.jpg", alt: "MetalWorking Plant" },
    { src: "src/image/project-3-1200x800.jpg", alt: "Mcmillan's House" },
    { src: "src/image/project-4-1200x800.jpg", alt: "ChildCare Center" },
    { src: "src/image/project-5-1200x800.jpg", alt: "City Stadium" },
    { src: "src/image/project-6-1200x800.jpg", alt: "Social Housing" },
  ];

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const changeIndex = (index: number) => {
    setActiveIndex(index); 
  };

  return (
    <section id="projects" className="projects py-5 ">
      <div className="container py-5">
        <div>
          <h2 className="text-center ">Our Projects</h2>
          <div className="row justify-content-center">
            <div className="col-1">
              <hr className="orangeColor" />
            </div>
          </div>
        </div>
        <div className="row my-5">
          {images.map((image, index) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={index}
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
            >
              <div className="card h-100">
                <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center text-white p-3 overlay-effect">
                  <p>{image.alt}</p>
                  <h3 className="card-title">{image.alt}</h3>
                </div>
                <img src={image.src} className="card-img-top" alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <GalleryModal
          images={images}
          activeIndex={activeIndex}
          onClose={closeModal}
          onChangeIndex={changeIndex}
        />
      )}
    </section>
  );
};

export default Projects;
