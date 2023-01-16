import React, {useState} from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

function ProjectList ({ projects }: ProjectListProps) {
        const [projectBeingEdited, setProjectEdited] = useState({});

        const handleEdit = (project: Project) => {
            setProjectEdited(project);
       };

       const cancelEditing = () => {
            setProjectEdited({});
       };
    
        const items = projects.map(project => (
           <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
                <ProjectForm
                    onCancel={cancelEditing}
                />
            ) : (
                <ProjectCard project={project} onEdit={handleEdit} />
             )}
           </div>
         ));
         return <div className="row">{items}</div>;
     }

export default ProjectList