import { operations } from "./AppSidebar"

export default function Display({ currentTab, setCurrentTab, currentOperation } ){

    return(
        <div className='p-3'> 
            <div className= {currentTab === "Meta" ? 'block' : 'hidden'}>
              Meta info about "{currentOperation}" goes here
            </div>
            <div className= {currentTab === "G-code" ? 'block' : 'hidden'}>
              G-code info about "{currentOperation}" goes here
            </div>
            <div className= {currentTab === "Simulate" ? 'block' : 'hidden'}>
              Simulation info about "{currentOperation}" goes here
            </div>
            <div className= {currentTab === "List" ? 'block' : 'hidden'}>
              Tool list info about "{currentOperation}" goes here
            </div>
            
        
        </div>
)}
