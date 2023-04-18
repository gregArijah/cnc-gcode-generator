import React, { useState, useEffect, useRef }  from 'react';
import { Link, NavLink } from 'react-router-dom';

//import components
import Header from './Header';
import Sidebar from './DisplaySide';
import Navbar from './DisplayNav'
import Display from './Display';

function Main() {

  const [currentOperation, setCurrentOperation] = useState("");
  const [currentTab, setCurrentTab] = useState("");

  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">  
      {<Header />}  
      <div className="flex flex-grow">  
          {<Sidebar currentOperation={currentOperation} setCurrentOperation={setCurrentOperation} />}
          <main className="flex-grow p-6">
            {< Navbar setCurrentTab={setCurrentTab} currentTab={currentTab} currentOperation={currentOperation}/>}    
            {< Display currentTab={currentTab} setCurrentTab={setCurrentTab} currentOperation={currentOperation} />}
            {currentTab===""&&currentOperation!==""&&setCurrentTab('Meta')}
          </main>
      </div>
    </div>
);
}

export default Main;
