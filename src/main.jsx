import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './Layout/MainLayout'
import Construction from './components/Construction'
import Curso from './pages/Curso'
//import 'react-toastifydist/ReactToastify.css';
import App from './components/App'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
)
