import React from "react";
import "./navbar.sass";

const Navbar = () => {
    return(<>
       <div className="navbar">
            <a href="#" className="navbar-logo">TUTAJ BEDZIE LOGO</a>
            <ul className="navbar-list">
                <li><a href="#" className="navbar-list-element">O mnie</a></li>
                <li><a href="#" className="navbar-list-element">Kontakt</a></li>
            </ul>
       </div>
    </>)
}

export default Navbar;