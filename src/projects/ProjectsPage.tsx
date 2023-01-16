import React from 'react'
import { MOCK_PROJECTS } from './MockProjects'
import ProjectList from './ProjectList'

function ProjectsPage() {
  return (
    //Use JSON.stringify() to output the MOCK_PROJECTS array from MockProjects.ts in the component.
    <>
    <h1>Projects</h1>
    <ProjectList projects={MOCK_PROJECTS}/>
    </>
  )
}

export default ProjectsPage