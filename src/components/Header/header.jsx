import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/LOGO (1).png";

const Header = () => {
  // permet de localiser le lien
  const location = useLocation();
 // je definis le state homeActive et aboutActive (et false par défaut)
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setHomeActive(true);
    } else if (location.pathname === "/about") {
      setAboutActive(true);
    }
  });

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={Logo} alt="Logo de agence kasa" />
        </div>
      </Link>
      <nav className="header__navbar">
        <Link className={homeActive ? "linkActive" : ""} to="/">
          Accueil
        </Link>
        <Link className={aboutActive ? "linkActive" : ""} to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
