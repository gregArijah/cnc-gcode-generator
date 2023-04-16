import React, { useState, useEffect, useRef }  from 'react';
import { Link, NavLink } from 'react-router-dom';


//import icons



//import components
import Header from './Header';
import Sidebar from './Sidebar';
import Navlinks from './Navlinks';

function Main() {
 

  const [currentTab, setCurrentTab] = useState("G-code");

  
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
    
      {<Header />}  
    

      {/* Body */}
      <div className="flex flex-grow">  
          
          {<Sidebar />}

          {/* Main section */}
          <main className="flex-grow p-6">

          {< Navlinks />}
        
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
