import React from 'react';
import './AboutPage.css';
const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h2>Ben Kimim</h2>
        <p>
         Merhaba Ben Bilgisayar Mühendisliği Öğrencisi Mehmet Öz 
        </p>
        <p>
          Mobil Yazılım Ve Siber Güvenlik İlgi Alanlarım Arasındadır.Beni Daha İyi tanımanız için hobilerimi aşağıdaki kartlara ekledim.
        </p>

        <h2>Hobilerim</h2>
         
        <div className="skills">
            <a href="https://tr.wikipedia.org/wiki/Satran%C3%A7">
            <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Satranç</h3>
          </div>
            </a>
          <a href="https://tr.wikipedia.org/wiki/Futbol" >
                <div className="skill-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Futbol</h3>
          </div>
          </a>
         <a href='https://tr.wikipedia.org/wiki/Film'>
             <div className="skill-card">
            <i className="fas fa-database"></i>
            <h3>Film İzlemek</h3>
          </div>
         </a>
           <a href='https://tr.wikipedia.org/wiki/Dizi'>
             <div className="skill-card">
            <i className="fas fa-cloud"></i>
            <h3>Dizi İzlemek</h3>
          </div>
           </a>
          <a href='https://tr.wikipedia.org/wiki/Basketbol'>
          <div className="skill-card">
            <i className="fas fa-paint-brush"></i>
            <h3>Basketbol</h3>
          </div>
          </a>
        
           <a href="https://tr.wikipedia.org/wiki/Y%C3%BCzme_(spor)">
          <div className="skill-card">
            <i className="fas fa-server"></i>
            <h3>Yüzme</h3>
           
          </div></a>
        </div>
      </div>
    </div>
  );
};

export default About;