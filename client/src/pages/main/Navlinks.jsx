import { useState } from "react";


import { libraryIcon, codeIcon, dataIcon, robotIcon } from './FontAwesome';

export default function Navlinks(){
    const [currentTab, setCurrentTab] = useState("G-code");

    return(
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
    )
}