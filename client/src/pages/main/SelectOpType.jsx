import React from "react";
import MyModal from "../../components/modal"

export default function SelectOpType({ isOpen, onClose}){
    return ( 
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-2xl font-medium mb-4">Select an Operation</div>
                <p className="mb-4 text-lg font-medium">Point</p>
                <ul className="flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Drill</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Ream</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Tap</p></li>             
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Chamfer</p></li>
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Threadmill</p></li>        
                </ul>
                <hr />
                <p className="mb-4 text-lg font-medium">Line</p>
                <ul className="flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Centre</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Left</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Right</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Outside</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Inside</p></li>            
                </ul>
                <hr />
                <p className="mb-4 text-lg font-medium">Face</p>
                <ul className="flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Face</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Boss</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Slot</p></li> 
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Pocket</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Pocket-Boss</p></li>       
                               
                </ul>
                <hr />
                <p className="mb-4 text-lg font-medium">Turning</p>
                <ul className="flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Bar</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Copy</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Corner</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Facing</p></li>                  
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Grooving</p></li>            
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Drilling</p></li>            
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Tapping</p></li>
                    <li><img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Threading</p></li>                         
                </ul>

                <button onClick={onClose} className="rounded border-2 p-3 px-10 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Cancel</button>
            </MyModal>    
    )
} 