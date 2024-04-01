import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import MainLayout from '../Layout/MainLayout';
import CursoLayout from "../Layout/CursoLayout";
import Construction from './Construction';  
import Curso from '../pages/Curso';
import ScrollToTop from "./ScrollToTop";
  const App = () => {
  return (
  <>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Construction />} />
        </Route>
        <Route path="/cursos/" element={<CursoLayout />}>
          <Route path=":curso" element={<Curso />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
