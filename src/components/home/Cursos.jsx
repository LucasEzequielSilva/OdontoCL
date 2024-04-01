import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import data from '../../utils/cursos.json'

const Cursos = () => {
  return (
    <section className='cursos-container' id='cursos'>
        <h2>Cursos</h2>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p className='max-w-[52rem]'>Todo lo que necesitas para tu actualización profesional, mantenerte al día con las normativas vigentes, junto con la seguridad y prevención que tus pacientes merecen.</p>
            <Link to="/cursos" className='btn md:px-16 md:flex-grow-0'>Ver todos</Link>
        </div>
        <div className="cards-container flex gap-4 justify-center">
          {
            data.length > 0 && data.map((curso, index)=>(
              <Card curso={curso} key={index}/>
            ))
          }
        </div>
        <div className="indicators-container">
          <div className="arrow arrow-left">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="arrow arrow-right">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
    </section>
  )
}

export default Cursos