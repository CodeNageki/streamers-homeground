import React from "react";
import "./about.sass";

const About = () => {
    return(<section className="about">
        <div className="about-container">
            <div className="about-center-text">
                <h3>Polish Front-End Dev</h3>
                <p>I'm Dominik, a ramen lover and a programmer skilled in HTML, CSS, SASS, JavaScript, and React. I create captivating yet minimalistic web experiences by blending design and functionality. Let's bring your ideas to life using cutting-edge front-end technologies. Ready to collaborate?</p>
            </div>
            <img src="laptop.jpeg" alt="laptop" className="laptop-image"/>
        </div>
    </section>)
}

export default About;