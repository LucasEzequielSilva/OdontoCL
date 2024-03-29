import React from "react";

const Footer = () => {
  return (
    <footer className="p-28">
      <div className="title-wrapper">
        <p>Odonto CL</p>
        <ul className="flex gap-4">
            <li><a href="/">Inicio</a></li>
            <li><a href="https://www.youtube.com/@Odontocl">YouTube</a></li>
            <li><a href="https://www.instagram.com/odonto_cl/">Instagram</a></li>
            <li><a href="https://www.facebook.com/odontocl.cl">Facebook</a></li>
            <li><a href="https://wa.link/6870cn">Contacto</a></li>
        </ul>
      </div>
      <hr />
      <div>
        <p>Todos los derechos reservados ® odentocl.cl  | Aplican términos y condiciones!</p>
      </div>
    </footer>
  );
};

export default Footer;
