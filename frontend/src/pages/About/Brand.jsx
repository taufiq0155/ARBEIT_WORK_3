// Brand.jsx
import React from "react";

const Brand = () => {
  const brands = [
    { id: 1, src: "images/about/brand-img1.png", alt: "brand image 1" },
    { id: 2, src: "images/about/brand-img2.png", alt: "brand image 2" },
    { id: 3, src: "images/about/brand-img3.png", alt: "brand image 3" },
    { id: 4, src: "images/about/brand-img4.png", alt: "brand image 4" },
    { id: 5, src: "images/about/brand-img5.png", alt: "brand image 5" },
    { id: 6, src: "images/about/brand-img6.png", alt: "brand image 6" },
    { id: 7, src: "images/about/brand-img7.png", alt: "brand image 7" },
    { id: 8, src: "images/about/brand-img8.png", alt: "brand image 8" },
    { id: 9, src: "images/about/brand-img9.png", alt: "brand image 9" },
    { id: 10, src: "images/about/brand-img10.png", alt: "brand image 10" },
  ];

  return (
    <div className="brand-area pt-65">
      <div className="row justify-content-between title-margin mb-45">
        <div className="col-xl-6 col-lg-5 col-md-4 col-sm-12 col-12 d-flex align-items-center">
          <div className="title">
            <h2 className="position-relative pl-25">Brands & Clients</h2>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7 col-md-8 col-sm-12 col-12 text-right">
          <div className="title-content text-right">
            <p className="text-left">
              Eva cididunt ut labore et dolor magna antiqua.Ut ad enum ad dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <ul className="brands-wrapper">
        {brands.map((brand, index) => (
          <li
            key={brand.id}
            className={`d-inline-block text-center mb-15 ${
              index < brands.length - 1 ? "mr-12" : ""
            }`}
          >
            <div className="single-brand">
              <img src={brand.src} alt={brand.alt} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Brand;
