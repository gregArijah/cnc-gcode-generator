export default function Display({ currentTab, setCurrentTab, currentOperation } ){

    return(
        <div className='p-3'> 
            {currentTab === "Meta" && <div>Meta info about "{currentOperation}" goes here</div>}
            {currentTab === "G-code" && <div>G-code info about  "{currentOperation}" goes here</div>}
            {currentTab === "Simulate" && <div>Simulation about "{currentOperation}" info goes here</div>}
            {currentTab === "List" && <div>Tool list info for entire project goes here</div>}
        </div>
)}
