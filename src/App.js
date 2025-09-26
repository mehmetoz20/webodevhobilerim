import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import resim1 from '../src/resim1.png';
import About from './Components/AboutPage';
import Messi from './Components/Messi';
import { Route } from 'react-router-dom';
import FightClub from './Components/FightClub';
import Carlsen from './Components/Carlsen';
import Friends from './Components/Friends';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
     
      
        
          <Routes>
            <Route path="/" element={<About />} /> 

            <Route path="/hakkimda" element={<About/>} />
          <Route path="/futbolcu" element={<Messi/>} />
           <Route path="/film" element={<FightClub/>} />
           <Route path="/dizi" element={<Friends/>} />
           <Route path="/satranc" element={<Carlsen/>} />
        </Routes>
          <Footer />
      </div>
         
    </Router>
  );
}

export default App;
