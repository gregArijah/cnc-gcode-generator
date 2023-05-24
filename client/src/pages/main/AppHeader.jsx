import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewProject from './ProjectNew';
import OpenProject from './ProjectOpen';


import { dropIcon, newIcon, openIcon, dlIcon, trashIcon  } from '../../icons/FontAwesome';
import { warehouseIcon, libraryIcon, chatIcon, settingsIcon, helpIcon, exitIcon } from '../../icons/FontAwesome';

export default function Header ({ setActiveProject }){
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('javatrolToken');
        localStorage.removeItem('javatrolUserId');
        localStorage.removeItem('javatrolProjectId');
        navigate('/');
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
    const handleNewProjectOpen = () => { setIsNewProjectOpen(true)};
    const handleNewProjectClose = () => { setIsNewProjectOpen(false)};
    
    const handleNewProject = () => {
        setIsOpen(!isOpen); 
        console.log('New Project');
        handleNewProjectOpen();
    }

    const [isOpenProjectOpen, setIsOpenProjectOpen] = useState(false);
    const handleOpenProjectOpen = () => { setIsOpenProjectOpen(true)};
    const handleOpenProjectClose = () => { setIsOpenProjectOpen(false)};

    const handleOpenProject = () => {
        setIsOpen(!isOpen);
        console.log('Open Project');
        handleOpenProjectOpen();
    }

    const handleSetActiveProject = (projectName) => {
        setActiveProject(projectName);
    };

      
    return(    
        <div>
            <NewProject isOpen={isNewProjectOpen} onClose={handleNewProjectClose} setActiveProject={handleSetActiveProject} />
            <OpenProject isOpen={isOpenProjectOpen} onClose={handleOpenProjectClose} setActiveProject={handleSetActiveProject}/>
            <header className="h-16 flex justify-between items-center font-bold text-xl border-b mb-4 pb-4">
                <div>Javatrol</div>
                <div className="pr-4 md:pr-6">              
                    <ul className='flex px-2 font-thin space-x-6'>
                        <div className="relative">
                            <button type="button" className="font-semibold px-4 rounded items-center hover:bg-gray-800 focus:outline-none" onClick={toggleDropdown} >
                                My Projects {dropIcon}  
                            </button>
                            {isOpen && (
                            <ul className="absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <li onClick={handleNewProject}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{newIcon} New</a></li>
                                <li onClick={handleOpenProject}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{openIcon} Open</a></li>
                                <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{trashIcon} Delete</a></li>
                                <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{dlIcon} Download</a></li>
                            </ul>
                            )}
                        </div>
                        <li className='opacity-30'>Home {warehouseIcon}</li>
                        <li className='opacity-30'>Tool Library {libraryIcon}</li>
                        <li className='opacity-30'>Chat {chatIcon}</li>
                        <li className='opacity-30'>Settings {settingsIcon}</li>
                        <li className='opacity-30'>Help {helpIcon}</li>
                        <li onClick={logout} className='cursor-pointer hover:text-orange-500  hover:bg-gray-600'   >Exit {exitIcon}</li>
                    </ul>
                </div>
            </header>
        </div>
)}