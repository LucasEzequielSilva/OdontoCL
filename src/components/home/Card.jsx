import React from 'react'
import image from '../../assets/images/card-image.png'
const Card = () => {
  return (
    <div className='card-container'>
        <img className='image' src={image} alt="imagen-de-curso" />
        <h4 className='font-medium text-xl mt-4'>Primeros Auxilios Generales</h4>
        <button className="btn">Ver detalle</button>
    </div>
  )
}

export default Card