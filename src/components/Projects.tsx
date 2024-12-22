import React, { useState } from "react";
import GalleryModal from "./modal/GalleryModal.js";

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "src/image/project-1-1200x800.jpg",
      alt: "White City Lofts",
      category: "Multifamily",
    },
    {
      src: "src/image/project-2-1200x800.jpg",
      alt: "MetalWorking Plant",
      category: "Industrial",
    },
    {
      src: "src/image/project-3-1200x800.jpg",
      alt: "Mcmillan's House",
      category: "Residential",
    },
    {
      src: "src/image/project-4-1200x800.jpg",
      alt: "ChildCare Center",
      category: "Healthcare",
    },
    {
      src: "src/image/project-5-1200x800.jpg",
      alt: "City Stadium",
      category: "Social",
    },
    {
      src: "src/image/project-6-1200x800.jpg",
      alt: "Social Housing",
      category: "Commercial",
    },
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
    <>
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
                    <i className="bi bi-image"></i>
                    <p>{image.category}</p>
                    <h3 className="card-title">{image.alt}</h3>
                    <p>Professional construction services</p>
                    <i className="bi bi-plus-lg"></i>
                  </div>
                  <img
                    src={image.src}
                    className="card-img-top"
                    alt={image.alt}
                  />
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
      <section className="contact py-5 orangeBgColor text-light">
        <div className="container">
          <div className="row d-flex align-items-center text-center">
            <div className="col-12 col-xl-6 mb-5 mb-xl-0">
              <p className="m-0">
                if you can envision it, then we can build it.
              </p>
              <p className="m-0">Tell us more about your project!</p>
            </div>
            <div className="col-12 col-xl-6 mb-5 mb-xl-0 text-xl-end">
              <button className="btn btn-light ">contact us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
