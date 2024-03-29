import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './Layout/MainLayout'
import Construction from './components/Construction'
import Curso from './pages/Curso'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<MainLayout/>}>
          <Route path='' element={<Home/>} />
          <Route path='*' element={<Construction/>}/>
          <Route path='/cursos/:curso' element={<Curso/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
