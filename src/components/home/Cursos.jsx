import React from 'react'
import Card from './Card'

const Cursos = () => {
  return (
    <section className='cursos-container'>
        <h2>Cursos</h2>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p className='max-w-[52rem]'>Todo lo que necesitas para tu actualización profesional, mantenerte al día con las normativas vigentes, junto con la seguridad y prevención que tus pacientes merecen.</p>
            <button className='btn md:px-16 md:flex-grow-0'>Ver todos</button>
        </div>
        <div className="cards-container flex gap-4 justify-center">
        <Card/>
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