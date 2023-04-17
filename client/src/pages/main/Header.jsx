import { useState } from 'react';

import { dropIcon, newIcon, openIcon, dlIcon, trashIcon  } from './FontAwesome';
import { libraryIcon, chatIcon, settingsIcon, helpIcon, exitIcon } from './FontAwesome';

export default function Header (){

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return(    
        <div>
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
                            <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{newIcon} New</a></li>
                            <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{openIcon} Open</a></li>
                            <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{trashIcon} Delete</a></li>
                            <li onClick={()=>setIsOpen(!isOpen)}><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{dlIcon} Download</a></li>
                        </ul>
                        )}
                        </div>
                        <li>Tool Library {libraryIcon}</li>
                        <li>Chat {chatIcon}</li>
                        <li>Settings {settingsIcon}</li>
                        <li>Help {helpIcon}</li>
                        <li>Exit {exitIcon}</li>
                    </ul>
                </div>
            </header>
        </div>
)}