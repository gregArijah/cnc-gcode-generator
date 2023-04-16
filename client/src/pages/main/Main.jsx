import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

import { dropIcon, newIcon, openIcon, dlIcon, trashIcon  } from './FontAwesome';
import { chatIcon, settingsIcon, helpIcon, exitIcon } from './FontAwesome';
import { libraryIcon, codeIcon, dataIcon, robotIcon } from './FontAwesome';
import { plusIcon } from './FontAwesome';

function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

  const [currentTab, setCurrentTab] = useState("G-code");

  const operations = ["centre drill","drill for 1/2-13 holes","chamfer","tap 1/2-13 holes"];
  
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
              <ol className='pl-4'>
                {operations.map((item,index)=>{
                  return <li key={index}>{index+1}. {item}</li>
                })}
              </ol> 
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
