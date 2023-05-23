import { useState } from 'react';
import { plusIcon } from '../../icons/FontAwesome';
import SelectOpType from './Select_Main';
import { getAllOperations } from '../../utils/api';

export const operations = [
    // {
    // name:"centre drill",
    // desc:"centre drill for 1 inch holes",
    // tool:"centre drill",
    // gcode:"gcode goes here for centre drilling 1 inch holes"
    // },
]
   
export default function Sidebar({ currentOperation, setCurrentOperation }){
     
    const [isOpen, setIsOpen] = useState(false);
   
    const handleOpenModal = () => {
        if (localStorage.getItem('javatrolProjectId') === null) {
            alert('Please select or create a project first');
            return;
        }
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };    

    return (
        <div className="w-64 bg-gray-800 border rounded-md" style={{height:"80vh", overflowY: 'auto',}}>
            <div className="h-16 flex justify-center items-center font-bold text-xl border-b" >
                Operations
            </div>
            <ul className='pl-4'>
                {operations.map((item,index)=>{
                    return <li key={index} className= {`mr-1 py-0.5 cursor-pointer ${currentOperation === `op${index+1}` ? 'text-orange-500' : 'text-white hover:text-orange-700'}`} onClick={() => setCurrentOperation(index)}>Operation {index+1}</li>
                })}
            </ul>  
            
            <button onClick={handleOpenModal} className='border-t border-b min-w-full mt-2 p-1 pl-4 bg-gray-900 text-left'>{plusIcon} add operation</button>      
            <SelectOpType isOpen={isOpen} onClose={handleCloseModal} />
            
 
        </div>
    )
}