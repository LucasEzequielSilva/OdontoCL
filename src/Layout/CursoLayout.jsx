import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import React from 'react'

const CursoLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default CursoLayout