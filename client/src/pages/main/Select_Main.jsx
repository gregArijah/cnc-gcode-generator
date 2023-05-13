import React, { useState } from "react";
import MyModal from "../../components/modal"
import SelectDrill  from "./SelectDrill";
import SelectPocket from "./SelectPocket";

export default function SelectOpType({ isOpen, onClose}){

    const [isDrillOpen, setIsDrillOpen] = useState(false);
    const handleDrillOpen = () => { setIsDrillOpen(true)};
    const handleDrillClose = () => { setIsDrillOpen(false)};

    const [isPocketOpen, setIsPocketOpen] = useState(false);
    const handlePocketOpen = () => { setIsPocketOpen(true)};
    const handlePocketClose = () => { setIsPocketOpen(false)}; 
    
    return ( 
        <div>
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-2xl font-medium mb-4">Select an Operation</div>
                <p className="m-4 mb-2 text-lg font-medium">Point</p>
                <ul className="ml-8 flex space-x-6">
                    <li onClick={handleDrillOpen} className="cursor-pointer hover:bg-orange-500 rounded-md p-0.5 transition duration-300"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Drill</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Ream</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Tap</p></li>             
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Chamfer</p></li>
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Threadmill</p></li>         
                </ul>
                <hr />
                <p className="m-4 mb-2 text-lg font-medium">Line</p>
                <ul className="ml-8 flex space-x-6">
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Centre</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Left</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Right</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Outside</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Inside</p></li>            
                </ul>
                <hr />
                <p className="m-4 mb-2 text-lg font-medium">Face</p>
                <ul className="ml-8 flex space-x-6">
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Face</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Boss</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Slot</p></li> 
                    <li onClick={handlePocketOpen} className="cursor-pointer hover:bg-orange-500 rounded-md p-0.5 transition duration-300"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Pocket</p></li>
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Pocket-Boss</p></li>       
                               
                </ul>
                <hr />
                <p className="m-4 mb-2 text-lg font-medium">Turning</p>
                <ul className="ml-8 flex space-x-6">
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Bar</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Copy</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Corner</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Facing</p></li>                  
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Grooving</p></li>            
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Drilling</p></li>            
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Tapping</p></li>
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Threading</p></li>                         
                </ul>
                
 
                <button onClick={onClose} className="rounded border-2 p-3 px-10 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Go Back</button>
            </MyModal>
            <SelectDrill isOpen={isDrillOpen} onClose={handleDrillClose} selectMainClose={onClose}/>
            <SelectPocket isOpen={isPocketOpen} onClose={handlePocketClose} selectMainClose={onClose}/>
        </div>    
    )
} 