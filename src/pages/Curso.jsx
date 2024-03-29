import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cursos from "../utils/cursos.json";
import "../styles/curso.scss";
import ReactPlayer from "react-player";
import png from "../assets/images/png.png";
const Curso = () => {
  let { curso } = useParams();
  let [cursoData, setCursoData] = useState({});
  useEffect(() => {
    if (curso != undefined) {
      cursos.forEach((c) => {
        if (c.href == curso) {
          setCursoData(c);
        }
      });
    }
  }, []);
  return (
    <div className="curso-container">
      <div className="hero-container">
        <section className="hero-description">
          <h1>{cursoData?.hero?.title}</h1>
          <p>{cursoData?.hero?.description}</p>
          <a href={cursoData?.linkPago} className="btn">
            Inscribete al curso
          </a>
        </section>
        <ReactPlayer
          className="hero-video"
          url={`/src/assets/videos/${cursoData?.hero?.video}`}
          controls
        />
      </div>
      <div className="ads-container">
        <h2>{cursoData?.ads?.title}</h2>
        <a href={cursoData?.linkPago} className="btn">
          Inscripción
        </a>
        <img
          className="ad-image"
          src={`/src/assets/cursos/${cursoData?.ads?.image}`}
          alt="image"
        />
      </div>
      <div className="content-container">
        <h2>Contenidos</h2>
        <p>Te describimos la estructura</p>
        <div className="content-wrapper">
          {cursoData?.contenidos?.map((content) => (
            <div key={content.id}>
              <div className="number">{content?.id}</div>
              <h3>{content?.name}</h3>
              <p>{content?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="teachers-container">
        <img className="vector" src={png} alt="vector" />
        <h2>Nuestro Docente</h2>
        <p>Dr. Javier Ignacio Zamora Castro</p>
      </div>
    </div>
  );
};

export default Curso;
