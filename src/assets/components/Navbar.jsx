import React, {useState} from "react";
import "./navbar.sass";
import classNames from "classnames";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    return(<>
       <header>
        <nav className="nav navbar-desktop">
            <a href="#" className="navbar-logo-desktop">zaw.dev</a>
            <ul className="navbar-page-navigation-desktop">
                <li><a href="#" className="navbar-page-navigation-desktop-element">Home</a></li>
                <li><a href="#" className="navbar-page-navigation-desktop-element">About</a></li>
                <li><a href="#" className="navbar-page-navigation-desktop-element">Projects</a></li>
                <li><a href="#" className="navbar-page-navigation-desktop-element">Contact</a></li>
            </ul>
        </nav>
        <nav className="nav navbar-mobile">
            <a className="navbar-logo-mobile">zawidzki.dev</a>
            <a onClick={toggleMenu} className="navbar-burger-mobile">
                <ion-icon name="grid-outline"></ion-icon>
            </a>
            <div className={classNames('navbar-mobile-slider', { 'is-open': isOpen })}>
                <ul className="navbar-page-navigation-mobile">
                    <li><a href="#" className="navbar-page-navigation-mobile-element">Home</a></li>
                    <li><a href="#" className="navbar-page-navigation-mobile-element">About</a></li>
                    <li><a href="#" className="navbar-page-navigation-mobile-element">Projects</a></li>
                    <li><a href="#" className="navbar-page-navigation-mobile-element">Contact</a></li>
                </ul>
            </div>
        </nav>
       </header>
    </>)
}

export default Navbar;