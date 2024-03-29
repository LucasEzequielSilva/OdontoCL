import React from 'react'
import image from '../../assets/images/card-image.png'
import { Link } from 'react-router-dom'
const Card = ({curso}) => {
  return (
    <div className='card-container'>
        <img className='image' src={`/src/assets/cursos/${curso.image}`} alt="imagen-de-curso" />
        <h4 className='font-medium text-xl mt-4'>{curso.name}</h4>
        <Link to={`/cursos/${curso.href}`} className="btn">Ver detalle</Link>
    </div>
  )
}

export default Card