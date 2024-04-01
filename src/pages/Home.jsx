import React from "react";
import woman from "/assets/images/vector-woman-hero.png";
import vector_woman from "/assets/images/vector-hero.png";
import porque_aprender from "/assets/images/porque-aprender-image.png";
import ads_2_image from "/assets/images/ads_2_image.png";
import CarouselContainer from "../components/home/CarouselContainer";
import CursosSection from "../components/home/Cursos";
import zoomImage from '/assets/images/zoom.png'
import Features from "../components/home/Features";
import Newsletter from "../components/home/Newsletter";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO";
const Home = () => {
  
  return (
    <>
      <main>      
      <SEO title='Home | Odonto CL'
description='Eleva tu práctica al máximo nivel con nuestro curso intensivo Avalado por el Ministerio de Salud de Chile.'
name='Odonto CL'
type='Cursos'/>
        <div className="hero-container">
          <section className="hero">
            <h1>
              Preparate para la mejor Experiencia Educativa en ODONTOLOGÍA!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="8"
                viewBox="0 0 240 8"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.51707 6.51301C10.6038 6.02468 23.9718 6.00026 60.2611 5.95143C116.928 5.87818 161.902 5.34101 174.401 4.55968C175.394 4.48643 95.961 3.94926 87.8036 4.33993C75.0869 4.97476 14.3567 4.43759 2.13625 3.70509C-1.33759 3.50976 -0.0348828 2.82609 2.22931 2.67959C5.76517 2.43542 15.2562 2.45984 41.2791 2.50867C59.5787 2.53309 205.17 1.9715 221.081 0.970417C230.014 0.408833 235.442 -0.103917 237.923 0.0181665C240.001 0.115833 240.032 0.408833 238.233 1.21458C237.023 1.75175 238.388 2.06917 239.257 2.21567C240.59 2.45984 240.032 3.29001 238.357 3.94926C236.093 4.85268 232.185 4.82826 234.046 3.92484C234.449 3.72951 234.542 3.24117 233.115 3.33884C228.959 3.63184 199.587 5.63401 191.615 5.97584C106.507 9.68718 23.4445 6.97693 5.85822 7.88035C-0.376077 8.22219 2.47747 6.80601 5.51707 6.51301Z"
                  fill="#25B4F8"
                />
              </svg>
            </h1>
            <p>
              Nuestros cursos están diseñados para proporcionar a los
              odontólogos las habilidades y conocimientos esenciales para una
              práctica segura y eficiente.
            </p>
            <div className="cta-container">
              <a href="#cursos" className="btn">Lista de Cursos</a>
              <button className="wp-action">
                <div className="icon">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <Link to="https://wa.link/6870cn" className="text-wrapper">
                  <p>Contactanos</p>
                  <p>+569 7144-3828</p>
                </Link>
              </button>
            </div>
            <div className="testimonial">
              <div className="header">
                <div className="user">
                  <img
                    src="https://i.pinimg.com/originals/0f/9a/6f/0f9a6f86e2806b20e766fd3ae2897257.jpg"
                    alt="user"
                  />
                  <div className="text-wrapper">
                    <p>Thomas daniel</p>
                    <p>Sr Dental</p>
                  </div>
                </div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <p>
              Formación odontológica de excelencia impartida por profesionales expertos en el área. Muy recomendada para todos los interesados en cursos de este ámbito.              
              </p>
            </div>
          </section>
          <div className="image-hero">
            <img src={woman} alt="woman" className="image" />
            <img src={vector_woman} alt="vector" className="vector" />
          </div>
        </div>
        <Features></Features>
        <Newsletter />
        <div className="ads-1">
          <img src={porque_aprender} alt="imagen" />
          <section className="ads-wrapper">
            <h2>¿Por qué aprender con nuestra academia?</h2>
            <p>
              Calidad y relevancia. En Odonto CL comprendemos lo esencial de
              fomentar prácticas seguras y efectivas en odontología.
            </p>
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <p>Formación Integral</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <p>Actualización Profesional</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <p>Seguridad y Prevención</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <p>Bienestar del Personal</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>

                <p>Cumplimiento Normativo</p>
              </li>
            </ul>
            <a href="#cursos" className="btn">Cursos</a>
          </section>
        </div>
        <div className="ads-2">
          <section>
            <h2>
              Conecta con docentes destacados en su ámbito y amplia tu red
              profesional
            </h2>
            <p>
              Únete a una comunidad de profesionales para colaborar y aprender
              juntos. Enriquece tu carrera con la sabiduría de docentes
              renombrados. Expande horizontes y construye una networking valiosa.
            </p>
            <a href="#cursos" className="btn">Cursos</a>
          </section>
          <div className="image-container">
            <img src={zoomImage} alt="ads" />
            <div className="backdrop"></div>
          </div>
        </div>
        <CarouselContainer />
        <CursosSection />
      </main>
    </>
  );
};

export default Home;
