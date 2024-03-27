import React from "react";
import image from '../../assets/images/newsletter-image.png'

const Newsletter = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletter-wrapper">
        <h2>
          ¡Suscríbete a nuestro newsletter para no perderte ningún curso!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="460"
            height="9"
            viewBox="0 0 460 9"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.795257 5.67397C10.74 5.8459 36.8632 5.47941 107.778 4.47319C218.514 2.9 306.404 1.9628 330.837 2.11315C332.777 2.13237 177.559 4.7535 161.615 4.73288C136.759 4.68397 18.0889 6.77016 -5.78461 7.59582C-12.5711 7.82214 -10.0189 8.22927 -5.593 8.25973C1.31887 8.3173 19.8655 8.02996 70.7172 7.25391C106.477 6.71462 390.987 2.91541 422.09 3.11101C439.551 3.22054 450.162 3.39858 455.01 3.24826C459.07 3.12533 459.128 2.934 455.605 2.46171C453.236 2.14715 455.9 1.9018 457.595 1.78173C460.199 1.58488 459.1 1.06124 455.821 0.680632C451.388 0.158173 443.751 0.285824 447.397 0.819816C448.186 0.93525 448.373 1.25 445.584 1.22733C437.459 1.15576 380.042 0.694474 364.462 0.700278C198.112 0.72223 35.8235 4.85966 1.4489 4.77545C-10.737 4.73157 -5.14732 5.57046 0.795257 5.67397Z"
              fill="#25B4F8"
            />
          </svg>
        </h2>
        <p>
          Al suscribirte, recibirás directamente en tu bandeja de entrada
          contenido exclusivo y valioso sobre odontología.¡No te pierdas la
          oportunidad de estar a la vanguardia en tu campo!
        </p>
        <form className="field-newsletter">
          <div className="field">
            <i className="fa-regular fa-envelope"></i>
            <input type="text" placeholder="Ingresa tu mejor correo" />
          </div>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="image-container">
            <img src={image} alt="newsletter-image" />
            <div className="backdrop"></div>
    </div>
    </section>
  );
};

export default Newsletter;
