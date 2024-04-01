import React, { useEffect, useState, useRef } from "react";
import { useParams, Navigate } from "react-router-dom"; // Importa Redirect
import cursos from "../utils/cursos.json";
import "../styles/curso.scss";
import ReactPlayer from "react-player";
import png from "/assets/images/png.png";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO";
const Curso = () => {
  const [cursoData, setCursoData] = useState(null); // Initialize as null
  const [intervalId, setIntervalId] = useState(null);
  const [endDate, setEndDate] = useState(null); // Store course end date
  const [remainingTime, setRemainingTime] = useState(null); // Store remaining time
  const video = useRef();

  const { curso } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (curso !== undefined) {
      const selectedCurso = cursos.find((c) => c.href === curso);
      setCursoData(selectedCurso);

      // Parse launch date and set endDate
      const parsedEndDate = parseDateString(selectedCurso?.lanzamiento);
      setEndDate(parsedEndDate);
    }
  }, [curso]);

  useEffect(() => {
    if (endDate) {
      const now = Date.now();
      const difference = endDate - now;

      const interval = setInterval(() => {
        const now = Date.now();
        const difference = endDate - now;

        if (difference > 0) {
          const remainingTimeObject = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          };
          setRemainingTime(remainingTimeObject);
        } else {
          setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000); // Update every second

      setIntervalId(interval);

      return () => clearInterval(intervalId); // Clear interval on unmount
    }
  }, [endDate]);
  const parseDateString = (dateString) => {
    // Assuming format is dd/mm/yyyy
    const parts = dateString.split("/");
    if (parts.length !== 3) {
      return null; // Handle invalid format
    }
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
    const year = parseInt(parts[2], 10);

    return new Date(year, month, day);
  };

  return (
    <div className="curso-container">
      <SEO
        title={`Curso de ${cursoData?.name} | Odonto CL`}
        description="Descubre cómo dominar la Protección radiológica."
        name="Odonto CL"
        type="Curso"
      />
      <div className="contador-container">
        <div className="contador">
          {remainingTime ? (
            <div>
              <span>{remainingTime.days}<br/> <p>dias</p></span><p>:</p>
              <span>{remainingTime.hours}<br/><p>horas</p></span><p>:</p>
              <span>{remainingTime.minutes}<br/><p>minutos</p></span><p>:</p>
              <span>{remainingTime.seconds}<br/><p>segundos</p></span>
            </div>
          ) : (
            <span>¡El curso ya ha comenzado!</span>
          )}
        <div className="text-info-curso">
        Precio Lanzamiento 2024 | Acceso a <b>{cursoData?.name}</b>por una inversión única de ${cursoData?.precio} USD.
        </div>
        </div>
      </div>
      <div className="hero-container">
        <section className="hero-description">
          <h1>{cursoData?.hero?.title}</h1>
          <p>{cursoData?.hero?.description}</p>
          <a href={cursoData?.linkPago} className="btn">
            Inscríbete al curso
          </a>
        </section>
        <ReactPlayer
          className="hero-video"
          url={`/assets/videos/${cursoData?.hero?.video}`}
          controls
          ref={video}
        />
      </div>
      <div className="ads-container">
        <section>
          <h2>{cursoData?.ads?.title}</h2>
          <a href={cursoData?.linkPago} className="btn">
            ¡Hazlo ya!
          </a>
        </section>
        <img
          className="ad-image"
          src={`/assets/cursos/${cursoData?.ads?.image}`}
          alt="image"
        />
      </div>
      <div className="content-container">
        <h2>Todo lo que aprenderás</h2>
        <p>Te describimos la estructura</p>
        <div className="content-wrapper">
          {cursoData?.contenidos?.map((content) => (
            <div key={content.id}>
              <div className="number">{content?.id}</div>
              <h3>{content?.name}</h3>
              <p>{content?.description}</p>
            </div>
          ))}
          <a className="btn" download href="/assets/PROTECCIÓNRADIOLÓGICA.pdf">
            Descargar programa
          </a>
        </div>
      </div>
      <div className="teachers-container">
        <img className="vector" src={png} alt="vector" />
        <section>
          <h2>Nuestro Docente</h2>
          <p>{cursoData?.teachers?.name}</p>
          <img
            src={`/assets/images/${cursoData?.teachers?.image}`}
            alt={cursoData?.teachers?.name}
          />
          <p>{cursoData?.teachers?.especialidad}</p>
        </section>
      </div>
      <div className="promesa">
        <h2>{cursoData?.promesa?.title}</h2>
        <ul className="items-wrapper">
          {cursoData?.promesa?.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <a href={cursoData?.linkPago} className="btn">
          Inscribete al curso
        </a>
      </div>
    </div>
  );
};

export default Curso;
