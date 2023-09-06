import { useState } from 'react';
import MyModal from '../../components/modalSmall'; 
import { Link, useNavigate } from 'react-router-dom';
import { createProject, getUserById } from '../../utils/api';

export default function NewProject( {isOpen, onClose, setActiveProject, setProjectArray} ) {
    const [projectName, setProjectName] = useState('');
    const navigate = useNavigate();
    
    const getUserProjects = () => {
      getUserById(localStorage.getItem('javatrolUserId'))
          .then((response) => {
              setProjectArray(response.data.projects);
          })
          .catch((err) => {
              console.log(err);
          });}

    const handleCreateProject = (e) => {
      e.preventDefault();
      
      if (!projectName.trim()) {
        alert('Please enter a project name');
        return;
      }

      createProject({ projectName: projectName, userId: localStorage.getItem('javatrolUserId') })
        .then((res) => {
            if (res.status === 200) {
                localStorage.setItem('javatrolProjectId', res.data._id);
                localStorage.setItem('javatrolProjectName', projectName);
                setActiveProject(projectName);  
                getUserProjects();
                onClose();
            
            } else {
                alert('Project creation failed');
                onClose();
            }
        })
        .catch((err) => {
            console.log(err);
        }
        );
    }
  
  const handleCloseModal = () => {
    onClose();
  };


  return (
    <div>

      <MyModal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="text-2xl font-medium mb-4">New Project</div>
        <form onSubmit={handleCreateProject}>
          <p className="m-4 mb-2 text-lg font-medium">Project Name:</p>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="m-4 p-2 border text-black"
          />

          <button type="submit" onClick={handleCreateProject} className="m-4 p-2 bg-blue-500 text-white font-medium">
            Create
          </button>
        </form>

      </MyModal>
    </div>
  );
};
