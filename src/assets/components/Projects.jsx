import React from "react";
import "./projects.sass"

const Projects = () => {
    return(<section className="projects">
        <h3>My pieces of art and future projects</h3>
        <div className="projects-container">
            <div className="projects-first">
                <img src="questionmark.jpeg" alt="future project image" className="future-project-image"/>
                <div className="projects-first-text">
                    <span>I dont know yet</span>
                    <p>I dont have any projects yet but...</p>
                    <a href="#" className="github"><ion-icon name="logo-github" className="github-a"></ion-icon></a>
                </div>
            </div>
            <div className="projects-second">
                <img src="questionmark.jpeg" alt="future project image" className="future-project-image"/>
                <div className="projects-second-text">
                    <span>Who knows</span>
                    <p>Who knows what future will bring. Stay tuned for new projects that will apear here</p>
                    <a href="#" className="github"><ion-icon name="logo-github" className="github-a"></ion-icon></a>
                </div>
            </div>
        </div>
    </section>)
}

export default Projects;