import React from "react";
import MyModal from "../../components/modal"

export default function SelectOpType({ isOpen, onClose}){
    return ( 
            <MyModal isOpen={isOpen} onClose={onClose}>
                <div className="text-lg font-medium mb-4">Modal Title</div>
                <p className="mb-4">Modal content goes here.</p>
                <button onClick={onClose}>Close Modal</button>
            </MyModal>    
    )
} 