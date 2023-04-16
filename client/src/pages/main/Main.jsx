import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faCloudArrowUp} from '@fortawesome/free-solid-svg-icons'
import { faComments} from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'


const newIcon = <FontAwesomeIcon icon={faFileCirclePlus} style={{color: "#ff6600",}} />
const openIcon = <FontAwesomeIcon icon={faFolderOpen} style={{color: "#ff6600",}} />
const saveIcon = <FontAwesomeIcon icon={faCloudArrowUp} style={{color: "#ff6600",}} />
const chatIcon = <FontAwesomeIcon icon={faComments} style={{color: "#ff6600",}} />
const settingsIcon = <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#ff6600",}} />
const helpIcon = <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#ff6600",}} />

function Main() {
  const [currentTab, setCurrentTab] = useState("G-code");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="h-16 flex justify-between items-center font-bold text-xl border-b mb-4 pb-4">
        <div>Javatrol</div>
        <div className="pr-4 md:pr-6">              
                <ul className='flex px-2 font-thin space-x-6'>
                  <li>New {newIcon}</li>
                  <li>Open {openIcon}</li>
                  <li>Save {saveIcon}</li>
                  <li>Chat {chatIcon}</li>
                  <li>Settings {settingsIcon}</li>
                  <li>Help {helpIcon}</li>
                  <button className=' border rounded-md bg-orange-700 font-medium px-2'>Leave App</button>
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
              <ul className='px-2'>
                <li>opertation item 1</li>
                <li>opertation item 2</li>
                <li>opertation item 3</li>
                <li>opertation item 4</li>
                <li className='border rounded-md mt-2 bg-gray-900'>+ new operation</li>
              </ul>
          </div>

      {/* Main section */}
      <main className="flex-grow p-4">
        {/* Nav Links */}
        <nav className="flex-grow p-4">
            <ul className="flex border-b">
              <li className={`mr-1 py-2 px-4 cursor-pointer border-b-2 border-transparent ${currentTab === 'G-code' ? 'bg-gray-200 border-gray-500' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setCurrentTab('G-code')}>
                G-code
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer border-b-2 border-transparent ${currentTab === 'Simulate' ? 'bg-gray-200 border-gray-500' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setCurrentTab('Simulate')}>
                Simulate
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer border-b-2 border-transparent ${currentTab === 'Meta' ? 'bg-gray-200 border-gray-500' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setCurrentTab('Meta')}>
                Metadata
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer border-b-2 border-transparent ${currentTab === 'Library' ? 'bg-gray-200 border-gray-500' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setCurrentTab('Library')}>
                Library
              </li>
            </ul>

        </nav>
        <div>
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
