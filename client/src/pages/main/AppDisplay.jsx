//import { operations } from "./AppSidebar"

export default function Display({ currentTab, currentOperation, operationsArray } ){
    //let operations = operationsArray;
    //console.log(operations)
    let gcode = "";
    let meta = "";
    //let operationArray = Object.entries(operations[currentOperation]|| "");
    //'gcode = operationArray[0][1].gCode
    if (operationsArray[currentOperation] === undefined) {
        null
    } else {
        gcode = (operationsArray[currentOperation].operationGCode);
        meta = JSON.stringify(operationsArray[currentOperation].operationData, null, 2);
    }
    //console.log("hello", operations[currentOperation].formData.gCode);
   // let gcode = operationArray[currentOperation].formData.gCode;
    console.log("log gcode: " + gcode);
    console.log("log currentOperation: " + currentOperation);

    return(
        <div className='p-3'>
            <div className= {currentTab === "Meta" ? 'block' : 'hidden'}>
              <pre>
                {meta}
              </pre>
            </div>
            <div className= {currentTab === "G-code" ? 'block' : 'hidden'}>
              <pre>
                {gcode}
              </pre>
            </div>
            <div className= {currentTab === "Simulate" ? 'block' : 'hidden'}>
              Simulation info about "{currentOperation}" goes here
            </div>
            <div className= {currentTab === "List" ? 'block' : 'hidden'}>
              Tool list info about "{currentOperation}" goes here
            </div>
            
        
        </div>
)}
