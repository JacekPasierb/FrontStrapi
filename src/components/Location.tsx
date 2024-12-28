import React from "react";

const Location: React.FC = () => {
  return (
    <section id="location" className="location">
        <div className="map"> <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d67166.85570560824!2d22.859810762175023!3d51.27241924830132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1735403861317!5m2!1spl!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe></div>
     
    </section>
  );
};
export default Location;
