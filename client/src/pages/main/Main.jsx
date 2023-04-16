import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';


//import icons

import { libraryIcon, codeIcon, dataIcon, robotIcon } from './FontAwesome';
import { plusIcon } from './FontAwesome';

//import header
import Header from './Header';

function Main() {
 

  const [currentTab, setCurrentTab] = useState("G-code");

  const operations = ["centre drill","drill for 1/2-13 holes","chamfer","tap 1/2-13 holes"];
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      
      {<Header />}  
    

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
