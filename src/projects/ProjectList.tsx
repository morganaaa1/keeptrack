import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList ({ projects }) {
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project}></ProjectCard>
            <ProjectForm/>
        </div>
    ));

    return(
        <div className='row'>
            {items}
        </div>
    )
}

export default ProjectList