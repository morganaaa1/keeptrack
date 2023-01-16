import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'

function ProjectsPage() {
  return (
    //Use JSON.stringify() to output the MOCK_PROJECTS array from MockProjects.ts in the component.
    <>
    <h1>Projects</h1>
    <pre>{JSON.stringify(MOCK_PROJECTS, null, '')}</pre>
    </>
  )
}

export default ProjectsPage