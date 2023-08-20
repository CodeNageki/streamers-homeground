import React from "react";
import "./hero.sass";

const Hero = () => {
    return(<section className="hero">
        <div className="hero-container">
            <div className="content">
                <div className="hero-main">
                    <div className="hero-img"></div>
                    <div className="hero-compressed-about">
                        <h3>React Front-End Developer</h3>
                        <p>Hello, I'm Dominik Zawidzki.</p>
                        <p>Ambitious and <span>determined</span> Developer</p>
                        <p>living in southern part of Poland.</p>
                    </div>
                </div>
                <div className="hero-tech-stack">
                    <p>Tech Stack</p>
                    <ul>
                        <li className="html"><ion-icon name="logo-html5"></ion-icon></li>
                        <li className="css"><ion-icon name="logo-css3"></ion-icon></li>
                        <li className="sass"><ion-icon name="logo-sass"></ion-icon></li>
                        <li className="js"><ion-icon name="logo-javascript"></ion-icon></li>
                        <li className="react"><ion-icon name="logo-react"></ion-icon></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>)
}

export default Hero;