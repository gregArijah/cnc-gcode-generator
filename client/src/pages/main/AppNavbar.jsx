import { useState } from "react";

import { listIcon, codeIcon, dataIcon, robotIcon } from '../../icons/FontAwesome';

export default function Navlinks({ currentTab, setCurrentTab, currentOperation }){  
    return(
        <nav className="flex-grow">
            <ul className="flex border-b">
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'Meta' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('Meta')}>
                Metadata {dataIcon}
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'G-code' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('G-code')}>
                G-code {codeIcon}
              </li>
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'Simulate' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('Simulate')}>
                Simulate {robotIcon}
              </li>
              
              <li className={`mr-1 py-2 px-4 cursor-pointer ${currentTab === 'List' ? 'bg-gray-700' : 'text-white hover:bg-gray-800'}`} onClick={() => setCurrentTab('List')}>
                Tool List {listIcon}
              </li>
            </ul>
        </nav>
    )
}

