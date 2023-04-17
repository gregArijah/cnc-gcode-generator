export default function Output({ currentTab } ){

    return(
        <div className='p-3'>
            {currentTab === "G-code" && <div>G-code info goes here</div>}
            {currentTab === "Simulate" && <div>Simulation info goes here</div>}
            {currentTab === "Meta" && <div>Meta info goes here</div>}
            {currentTab === "List" && <div>Tool list info goes here</div>}
        </div>
)}
