import { Link, useParams } from "react-router-dom"
import projects from './../projects-data.json'

function ProjectDetails() {

    const { project_id } = useParams()

    const selectedProject = projects.find(elm => elm._id == project_id)

    return (

        !selectedProject
            ?
            <h1>{project_id} no existe</h1>
            :
            <div>
                <h1>Detalles de proyecto: {selectedProject.name}</h1>
                <hr />
                <p>Detalles: {selectedProject.description}</p>
                <p>Tecnologías: {selectedProject.technologies}</p>
                <p>Año: {selectedProject.year}</p>
                <hr />

                <Link to={'/proyectos'}>Volver al listado de proyectos</Link>
            </div>
    );
}

export default ProjectDetails