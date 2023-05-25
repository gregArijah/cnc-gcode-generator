import React, { useState, useEffect, useRef }  from 'react';
import { Link, NavLink } from 'react-router-dom';

//import components
import Header from './AppHeader';
import Sidebar from './AppSidebar';
import Navbar from './AppNavbar'
import Display from './AppDisplay';

export default function Main() {

  const [currentOperation, setCurrentOperation] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const [activeProject, setActiveProject] = useState('Project') ;
  const [operationsArray, setOperationsArray] = useState([]);

  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Header setActiveProject={setActiveProject} />  
      <div className="flex flex-grow">  
          <Sidebar currentOperation={currentOperation}
                   setCurrentOperation={setCurrentOperation} 
                   activeProject={activeProject}
                   operationsArray={operationsArray}
                   setOperationsArray={setOperationsArray} 
                   />
          <main className="flex-grow p-6">
            < Navbar setCurrentTab={setCurrentTab} 
                     currentTab={currentTab} 
                     currentOperation={currentOperation}
                     />    
            < Display currentTab={currentTab} 
                      setCurrentTab={setCurrentTab} 
                      currentOperation={currentOperation}
                      operationsArray={operationsArray}
                      />
            {currentTab===""&&currentOperation!==""&&setCurrentTab('G-code')}
            {currentTab!==""&&currentOperation===""&&setCurrentTab('')}
          </main>
      </div>
    </div>
);
}


