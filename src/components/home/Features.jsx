import React from "react";
import studen_icon from "/assets/images/stundent.png";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <div className="type">
          <img src={studen_icon} alt="students" />
        </div>
        <h2>+1000 estudiantes</h2>
        <p>Más de mil estudiantes se especializaron con Odonto CL</p>
      </div>
      <div className="arrow-container">
        <div className="arrow arrow-left">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="arrow arrow-right">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Features;
