import React from "react";
import "./Navbar.css"; // stil dosyası istersen
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">En Sevdiklerim</div>
      <ul className="nav-links">
        <li><Link to ="/hakkimda">Hakkımda</Link></li>
        <li> <Link to="/futbolcu"> Favori Futbolcum</Link></li>
        <li><Link to="/satranc">Favori Satrançcım</Link></li>
        <li><Link to="/film">En Sevdiğim Film</Link></li>
        <li><Link to="/dizi">En Sevdiğim Dizi</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
