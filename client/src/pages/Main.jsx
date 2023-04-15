import React, { useState, useEffect, useRef }  from 'react';
import { Link } from 'react-router-dom';

// function Main() {
//     return (
//         <div className="bg-jvt-outside bg-cover text-white min-h-screen max-w-full bg-center flex flex-col justify-center md:justify-end items-center md:pb-8">
//           <div className='border-solid border-4 rounded-2xl p-12 w-min md:w-max min-h-min' style={{backgroundColor: 'rgba(0, 0, 0, 0.65)', overflowY: 'auto', maxHeight: '500px' }}>
//             <div className='opacity-100 space-y-5'>   
//                 <h1 className="text-4xl text-white font-bold mb-16 md:mb-0 text-center ">Coming Soon!</h1>
//                 <p className="text-xl md:text-2xl text-white font-medium pt-20 md:pt-14 text-center max-w-md">
//                 We're working hard to bring you an amazing application. Stay tuned for
//                 updates!
//                 </p>
//             </div>
//           </div>
//         </div>
//   );
// }

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
