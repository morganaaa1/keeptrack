import React from 'react'
import { Project } from './Project'
import PropTypes from 'prop-types';

function ProjectList({ projects }) {
    return (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="cols-sm">
              <div className="card">
                <img src={project.imageUrl} alt={project.name} />
                <section className="section dark">
                  <h5 className="strong">
                    <strong>{project.name}</strong>
                  </h5>
                  <p>{project.description}</p>
                  <p>Budget : {project.budget.toLocaleString()}</p>
                </section>
              </div>
            </div>
          ))}
        </div>
      );
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList