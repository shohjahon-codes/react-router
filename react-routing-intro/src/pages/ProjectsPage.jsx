import { Link } from "react-router-dom";
import projectsData from "./../projects-data.json";

function ProjectsPage() {

    return (
        <div>
            <h2>Projects</h2>
            {
                projectsData.map((project) => {

                    return (
                        <div key={project._id} className="project">

                            <h3>{project.name}</h3>
                            <p>{project.technologies}</p>

                            <hr />

                            <Link to={`/proyectos/${project._id}`}>VER DETALLES</Link>

                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProjectsPage