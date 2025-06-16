import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Calendrier from './pages/Calendrier';
import Retouches from './pages/Retouches'; // ✅ ajout
import Footer from './pages/Footer';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/retouches" element={<Retouches />} /> 
          <Route path="/contact" element={<div>Contact</div>} />
          

        </Routes>
        <Footer />
      </main>

    </Router>
  );
}

export default App;
