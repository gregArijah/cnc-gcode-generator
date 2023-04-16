import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';


//import icons

import { libraryIcon, codeIcon, dataIcon, robotIcon } from './FontAwesome';


//import components
import Header from './Header';
import Sidebar from './Sidebar';

function Main() {
 

  const [currentTab, setCurrentTab] = useState("G-code");

  
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      
      {<Header />}  
    

      {/* Body */}
      <div className="flex flex-grow">  
          {/* Sidebar */}
          {<Sidebar />}
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
