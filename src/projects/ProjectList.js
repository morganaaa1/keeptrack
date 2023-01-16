import React from 'react'
import { Project } from './Project'
import PropTypes from 'prop-types';

function ProjectList({ projects }) {
  return (
    <pre>{JSON.stringify(projects, null, '')}</pre>
  )
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired
}

export default ProjectList