import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [currentTab, setCurrentTab] = useState("G-code");

  return (
    <div className="h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="h-16 flex justify-between items-center font-bold text-xl border-b mb-4">
        <div>Javatrol</div>
        <div className="pr-4 md:pr-6">
                <Link role='button' to='/app' className="flex items-center justify-center sm:text-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-16 sm:h-16 sm:w-48 float-right">
                  Leave App
                </Link>
          </div>
      </header>

      {/* Body */}
      <body className="flex">  
          {/* Sidebar */}
          <div className="flex flex-col flex-shrink-0 w-64 bg-white border-r">
              <div className="h-16 flex justify-center items-center font-bold text-xl border-b">
                  Operations
              </div>
              <ul>
                <li>opertation item 1</li>
                <li>opertation item 2</li>
                <li>opertation item 3</li>
                <li>opertation item 4</li>
              </ul>
          </div>

      {/* Main section */}
      <main className="flex-grow p-4">  
        {/* Nav Links */}
        <div className="flex-grow p-4">
                <ul> 
                  <li
                    className={`${
                      currentTab === "G-code" ? "bg-gray-200" : ""
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setCurrentTab("G-code")}
                  >
                    G-code
                  </li>
                  <li
                    className={`${
                      currentTab === "Toolpath" ? "bg-gray-200" : ""
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setCurrentTab("Toolpath")}
                  >
                    Toolpath
                  </li>
                  <li
                    className={`${
                      currentTab === "Meta" ? "bg-gray-200" : ""
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setCurrentTab("Meta")}
                  >
                    Meta
                  </li>
                  <li
                    className={`${
                      currentTab === "Chat" ? "bg-gray-200" : ""
                    } py-2 px-4 cursor-pointer`}
                    onClick={() => setCurrentTab("Chat")}
                  >
                    Chat
                  </li>
                </ul>
          </div>
        {/* Main content */}
        {currentTab === "G-code" && <div>G-code info goes here</div>}
        {currentTab === "Toolpath" && <div>Toolpath info goes here</div>}
        {currentTab === "Meta" && <div>Meta info goes here</div>}
        {currentTab === "Chat" && <div>Chat info goes here</div>}
      </main>
      </body>
    </div>
);
}

export default Main;
