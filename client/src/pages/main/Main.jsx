import React, { useState, useEffect, useRef }  from 'react';
import { Link, NavLink } from 'react-router-dom';

//import components
import Header from './Header';
import Sidebar from './DisplaySide';
import Navlinks from './DisplayNav'
import Output from './Display';

function Main() {
  const [currentTab, setCurrentTab] = useState("G-code");
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">  
      {<Header />}  
      <div className="flex flex-grow">  
          {<Sidebar />}
          <main className="flex-grow p-6">
            {< Navlinks setCurrentTab={setCurrentTab} currentTab={currentTab} />}    
            {< Output currentTab={currentTab} />}
          </main>
      </div>
    </div>
);
}

export default Main;
