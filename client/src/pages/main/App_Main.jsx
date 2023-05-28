import React, { useState, useEffect, useRef }  from 'react';
import { Link, NavLink } from 'react-router-dom';

//import components
import Header from './AppHeader';
import Sidebar from './AppSidebar';
import Navbar from './AppNavbar'
import Display from './AppDisplay';
import ToolLibrary from './HeadLibrary';
import Chat from './HeadChat';
import Settings from './HeadSettings';
import Help from './HeadHelp';

export default function Main() {

  const [currentOperation, setCurrentOperation] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const [activeProject, setActiveProject] = useState(localStorage.getItem('javatrolProjectName') || 'Project') ;
  const [operationsArray, setOperationsArray] = useState([]);
  const [activeScreen, setActiveScreen] = useState('home');

  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <Header setActiveProject={setActiveProject} 
              setOperationsArray={setOperationsArray} 
              setActiveScreen={setActiveScreen}/>  
      <div className= {activeScreen == 'home'? "flex flex-grow": "hidden" }>  
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
      <div className= {activeScreen == 'library'? "flex flex-grow": "hidden" }>
        <ToolLibrary />
      </div>
      <div className= {activeScreen == 'chat'? "flex flex-grow": "hidden" }>
        <Chat />
      </div>  
      <div className= {activeScreen == 'settings'? "flex flex-grow": "hidden" }>
        <Settings />
      </div>  
      <div className= {activeScreen == 'help'? "flex flex-grow": "hidden" }>
        <Help />
      </div>  

    </div>
);
}


