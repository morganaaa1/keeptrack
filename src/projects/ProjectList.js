import React from 'react'
import { Project } from './Project'
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
    const items = projects.map(project => (
        <div key={project.id} className="cols-sm">
            <ProjectCard project={project}></ProjectCard>
        </div>
    ));

    return (
        <div className='row'>
            {items}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList