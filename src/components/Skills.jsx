
import "./Skills.css";
function Skills() {

    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git",
        "GitHub",
        "Responsive Design",
        "UI/UX Design"
    ];


    return (

        <section id="Skills" className="skills">

            <div className="skills-header">
                <h2>My Skills</h2>
                <p>
                    Technologies and tools I use to build websites.
                </p>
            </div>


            <div className="skills-container">

                {
                    skills.map((skill,index)=>(

                        <div 
                            className="skill-card" 
                            key={index}
                        >

                            {skill}

                        </div>

                    ))
                }

            </div>


        </section>

    )

}

export default Skills;