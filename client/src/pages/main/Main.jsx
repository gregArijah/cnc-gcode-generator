import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTrashCan, faFileCirclePlus, faFolderOpen, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComments, faScrewdriverWrench, faCircleQuestion, faDoorOpen} from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns, faCode, faDatabase, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const trashIcon = <FontAwesomeIcon icon={faTrashCan} style={{color: "#ff6600",}} />
const dropIcon = <FontAwesomeIcon icon={faChevronDown} style={{color: "#ff6600",}} />
const newIcon = <FontAwesomeIcon icon={faFileCirclePlus} style={{color: "#ff6600",}} />
const openIcon = <FontAwesomeIcon icon={faFolderOpen} style={{color: "#ff6600",}} />
const dlIcon = <FontAwesomeIcon icon={faCloudArrowDown} style={{color: "#ff6600",}} />
const chatIcon = <FontAwesomeIcon icon={faComments} style={{color: "#ff6600",}} />
const settingsIcon = <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#ff6600",}} />
const helpIcon = <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#ff6600",}} />
const exitIcon = <FontAwesomeIcon icon={faDoorOpen} style={{color: "#ff6600",}} />
const libraryIcon = <FontAwesomeIcon icon={faBuildingColumns} style={{color: "white",}} />
const codeIcon = <FontAwesomeIcon icon={faCode} style={{color: "white",}} />
const dataIcon = <FontAwesomeIcon icon={faDatabase} style={{color: "white",}} />
const robotIcon = <FontAwesomeIcon icon={faRobot} style={{color: "white",}} />
const plusIcon = <FontAwesomeIcon icon={faCirclePlus} style={{color: "white",}} />

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  const [currentTab, setCurrentTab] = useState("G-code");
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
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
                  <li>Chat {chatIcon}</li>
                  <li>Settings {settingsIcon}</li>
                  <li>Help {helpIcon}</li>
                  <li>Exit {exitIcon}</li>
              </ul>
          </div>
      </header>

      {/* Body */}
      <div className="flex flex-grow">  
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 border rounded-md" style={{height:"80vh", overflowY: 'auto',}}>
              <div className="h-16 flex justify-center items-center font-bold text-xl border-b" >
                  Operations
              </div>
              <ul className='pl-4'>
                <li>operation item 1</li>
                <li>operation item 2</li>
                <li>operation item 3</li>
                <li>operation item 4</li>
              </ul> 
              <button className='border-t border-b min-w-full mt-2 p-1 pl-4 bg-gray-900 text-left'>{plusIcon} add operation</button>
              
          </div>

      {/* Main section */}
      <main className="flex-grow p-6">
        {/* Nav Links */}
        <nav className="flex-grow">
            <ul className="flex border-b">
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'G-code' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('G-code')}>
                G-code {codeIcon}
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'Simulate' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('Simulate')}>
                Simulate {robotIcon}
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'Meta' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('Meta')}>
                Metadata {dataIcon}
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'Library' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('Library')}>
                Tool Library {libraryIcon}
              </li>
            </ul>

        </nav>
        <div className='p-3'>
            {/* Main content */}
            {currentTab === "G-code" && <div>G-code info goes here</div>}
            {currentTab === "Simulate" && <div>Simulation info goes here</div>}
            {currentTab === "Meta" && <div>Meta info goes here</div>}
            {currentTab === "Library" && <div>Tool Library info goes here</div>}
        </div>
      </main>
      </div>
    </div>
);
}

export default Main;
