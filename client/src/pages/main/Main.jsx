import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

function Main() {
  const [currentTab, setCurrentTab] = useState("G-code");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      {/* Header */}
      <header className="h-16 flex justify-between items-center font-bold text-xl border-b mb-4 pb-4">
        <div>Javatrol</div>
        <div className="pr-4 md:pr-6">
                {/* <Link role='button' to='/app' className="flex items-center justify-center sm:text-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-16 sm:h-16 sm:w-48 float-right">
                  Leave App
                </Link> */}
                <ul className='flex px-2 font-thin space-x-6'>
                  <li>New</li>
                  <li>Open</li>
                  <li>Save</li>
                  <li>Chat</li>
                  <li>Settings</li>
                  <li>Help</li>
                  <button className=' border rounded-md bg-orange-800 font-medium px-2'>Leave App</button>
              </ul>
          </div>
      </header>

      {/* Body */}
      <body className="flex flex-grow">  
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
              <li className={`mr-1 py-2 px-4 cursor-pointer border-b-2 border-transparent ${currentTab === 'Chat' ? 'bg-gray-200 border-gray-500' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setCurrentTab('Chat')}>
                Chat
              </li>
            </ul>

        </nav>
        <div>
            {/* Main content */}
            {currentTab === "G-code" && <div>G-code info goes here</div>}
            {currentTab === "Simulate" && <div>Simulation info goes here</div>}
            {currentTab === "Meta" && <div>Meta info goes here</div>}
            {currentTab === "Chat" && <div>Tool Library info goes here</div>}
        </div>
      </main>
      </body>
    </div>
);
}

export default Main;
