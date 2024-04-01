import React from "react";

const CarouselContainer = () => {
  return (
    <section className="customers-container">
      <h2>Clientes Felices</h2>
      <p>
        Una sonrisa habla más que mil palabras, te compartimos algunos
        testimonios de nuestros alumnos
      </p>
      <div className="carousel-container">
        <div className="carousel-card">
          <div className="card-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Mona_Lisa-restored.jpg/800px-Mona_Lisa-restored.jpg"
              alt="profile"
            />
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Thomas daniel</p>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="card-body text-[#3C4959]">
            Phosfluorescently synergize covalent outsourcing through functional
            strategic theme areas. Assertively scale strategic portals without
            distinctive relationships. Holisticly cultivate tactical e-services
            before fully researched sources.
          </div>
        </div>
        <div className="indicators-container">
          <div className="arrow arrow-left">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="arrow arrow-right">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselContainer;
