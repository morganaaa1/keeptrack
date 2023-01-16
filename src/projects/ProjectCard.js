import React from 'react'
import { Project } from './Project'
import PropType from 'prop-types'

function formatDescription(description) {
    return description.substring(0, 60) + '...';
}

function ProjectCard(props) {
    const { project } = props;
    return (
        <div className='card'>
            <img src={project.imageUrl} alt={project.name}/>
            <section className='section dark'>
                <h5 className='strong'>
                    <strong>
                        {project.name}
                    </strong>
                </h5>
                <p>
                    {formatDescription(project.description)}
                </p>
                <p>
                    Budget : {project.budget.toLocaleString()}
                </p>
            </section>
        </div>
    )
}

ProjectCard.propType = {
    project: PropType.instanceOf(Project).isRequired
}

export default ProjectCard