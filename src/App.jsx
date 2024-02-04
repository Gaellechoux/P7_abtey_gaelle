import React from 'react';
import "./styles/app.scss"; 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Logement from './pages/logement/Logement';
import Error from './pages/error/ErrorPages';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />


    </Routes>
    </BrowserRouter>
  );
}


export default App;
