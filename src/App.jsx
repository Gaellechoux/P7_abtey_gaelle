import React from 'react';
import "./styles/app.scss"; 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Logement from './pages/logement/Logement';
import Error from './pages/error/ErrorPages';
import Header from './components/Header/header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <BrowserRouter >
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logement />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}


export default App;
