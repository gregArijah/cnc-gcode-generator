import React from "react";
import MyModal from "../../components/modal"

export default function SelectOpType({ isOpen, onClose}){
    return ( 
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-2xl font-medium mb-4">Select an Operation</div>
                <p className="mb-4 text-lg font-medium">Point</p>
                <ul className="flex space-x-6">
                    <li><img src="https://image-placeholder.com/images/actual-size/75x75.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Drill</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/75x75.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Ream</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/75x75.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Tap</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/75x75.png" alt="placeholder" /><p className="mb-4 text-md font-medium">Threadmill</p></li>       
                    <li><img src="https://image-placeholder.com/images/actual-size/75x75.png"></img><p className="mb-4 text-md font-medium">Chamfer</p></li>       
                </ul>
                <hr />
                <p className="mb-4 text-lg font-medium">Line</p>
                <hr />
                <p className="mb-4 text-lg font-medium">Face</p>
                <hr />
                <p className="mb-4 text-lg font-medium">Turning</p>

                <button onClick={onClose} className="rounded border-2 p-3 px-10 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Cancel</button>
            </MyModal>    
    )
} 