import "./Projects.css";

function Projects() {

    const projects = [
        {
            title: "Calculator App",
            description: "A simple calculator built with HTML, CSS and JavaScript.",
            tech: "HTML, CSS, JavaScript"
        },

        {
            title: "To-Do List",
            description: "A task management app using JavaScript DOM manipulation.",
            tech: "HTML, CSS, JavaScript"
        },

        {
            title: "Quiz Game",
            description: "Interactive quiz application with random questions.",
            tech: "JavaScript"
        }
    ];


    return (
        <section id="Projects" className="projects">

            <h2>My Projects</h2>

            <div className="project-container">

                {projects.map((project,index)=>(
                    
                    <div className="project-card" key={index}>

                        <h3>{project.title}</h3>

                        <p>
                            {project.description}
                        </p>

                        <span>
                            {project.tech}
                        </span>

                        <div>
                            <button><a href="https://github.com/dashboard">
                                Demo</a>
                            </button>

                            <button><a href="https://github.com/dashboard">
                                GitHub </a>
                            </button>
                        </div>

                    </div>

                ))}

            </div>

        </section>
    )
}


export default Projects;