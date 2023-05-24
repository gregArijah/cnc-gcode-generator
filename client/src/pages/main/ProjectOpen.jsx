import { useState, useEffect } from 'react';
import MyModal from '../../components/modalSmall'; 
import { Link, useNavigate } from 'react-router-dom';
import { getUserById } from '../../utils/api';

export default function OpenProject( {isOpen, onClose, setActiveProject} ) {
    const [projectArray, setProjectArray] = useState([]);
    const navigate = useNavigate();
      //read getUserById from api.js into state variable
      //extract [projectName] from state variable
    
    useEffect(() => {
      getUserProjects();
    }, []);

    const getUserProjects = () => {
        getUserById(localStorage.getItem('javatrolUserId'))
            .then((response) => {
                setProjectArray(response.data.projects);
                console.log(response.data.projects);
    })
    .catch((err) => {
        console.log(err);
    });
  };
    
    const handleOpenProject = (project) => {
      //e.preventDefault();
      console.log(project);
      localStorage.setItem('javatrolProjectId', project._id);
      localStorage.setItem('javatrolProjectName', project.projectName);
      setActiveProject(project.projectName);



      handleCloseModal();
    }
  
  const handleCloseModal = () => {
    onClose();
  };


  return (
    <div>

      <MyModal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="text-2xl font-medium mb-4">Open Project</div>
        
         
        <ul className="m-4 space-y-3 text-lg">
          
          {projectArray.length > 0 ? 
            projectArray.map((project, index) => (
              <li onClick={()=>handleOpenProject(project)} className='cursor-pointer justify-between flex hover:bg-gray-700' key={index}>{index+1}. {project.projectName}<span className='opacity-10 pl-6'>{project._id}</span></li>
            ))
           : 
            <li>No projects found</li>
          }
        </ul>

        <button onClick={handleCloseModal} className="m-4 p-2 bg-blue-500 text-white font-medium">Go Back</button>

      </MyModal>
    </div>
  );
};
