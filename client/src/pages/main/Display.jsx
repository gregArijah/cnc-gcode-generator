export default function Display({ currentTab, currentOperation } ){

    return(
        <div className='p-3'>
            {currentTab === "G-code" && <div>G-code info about  "{currentOperation}" goes here</div>}
            {currentTab === "Simulate" && <div>Simulation about "{currentOperation}" info goes here</div>}
            {currentTab === "Meta" && <div>Meta info about "{currentOperation}" goes here</div>}
            {currentTab === "List" && <div>Tool list info about about "{currentOperation}" goes here</div>}
        </div>
)}
