import React from "react";
import MyModal from "../../components/modal"

export default function SelectDrill({ isOpen, onClose}){

    
    return ( 
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-2xl font-medium mb-4">Drilling</div>
                <p className="m-4 mb-2 text-lg font-medium">Point</p>
 
                <button onClick={onClose} className="rounded border-2 p-3 px-10 mt-2 bg-gray-950 hover:text-orange-500  hover:border-orange-500">Back</button>
            </MyModal>    
    )
} 