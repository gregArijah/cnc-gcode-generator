import React from "react";
import MyModal from "../../components/modal"
import SelectDrill  from "./SelectDrill";

export default function SelectOpType({ isOpen, onClose}){
    const SelectDrill = () =>{
        onClose();        
        alert("Currently working to bring your our first tool path");

    }
    return ( 
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-2xl font-medium mb-4">Select an Operation</div>
                <p className="m-4 mb-2 text-lg font-medium">Point</p>
                <ul className="ml-8 flex space-x-6">
                    <li className="cursor-pointer hover:bg-orange-500 rounded-md p-0.5 transition duration-300" onClick={SelectDrill}><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Drill</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Ream</p></li>       
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Tap</p></li>             
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Chamfer</p></li>
                    <li className="opacity-20"><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Threadmill</p></li>         
                </ul>
                <hr className="opacity-20"/>
                <div className="opacity-20">
                <p className="m-4 mb-2 text-lg font-medium">Line</p>
                <ul className="ml-8 flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Centre</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Left</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Right</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Outside</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Inside</p></li>            
                </ul>
                <hr />
                <p className="m-4 mb-2 text-lg font-medium">Face</p>
                <ul className="ml-8 flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Face</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Boss</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Slot</p></li> 
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Pocket</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Pocket-Boss</p></li>       
                               
                </ul>
                <hr />
                <p className="m-4 mb-2 text-lg font-medium">Turning</p>
                <ul className="ml-8 flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Bar</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Copy</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Corner</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Facing</p></li>                  
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Grooving</p></li>            
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Drilling</p></li>            
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Tapping</p></li>
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-2 text-md">Threading</p></li>                         
                </ul>
                </div>
 
                <button onClick={onClose} className="rounded border-2 p-3 px-10 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Cancel</button>
            </MyModal>    
    )
} 