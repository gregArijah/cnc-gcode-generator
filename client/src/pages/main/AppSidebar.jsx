import { useState, useEffect } from 'react';
import { plusIcon } from '../../icons/FontAwesome';
import SelectOpType from './Select_Main';
import { getAllOperations, getProjectById } from '../../utils/api';


export const operations = [];



   
export default function Sidebar({ currentOperation, setCurrentOperation, activeProject, operationsArray, setOperationsArray }){

    //const [operationsArray, setOperationsArray] = useState([]);
    useEffect(() => {
        getProjectOperations();
    }, []);

    const getProjectOperations = () => {
        getProjectById(localStorage.getItem('javatrolProjectId'))
            .then((response) => {
                setOperationsArray(response.data.operations);
                console.log(response.data.operations);
            })
            .catch((err) => {
                console.log(err);
            });
    };

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
                {activeProject}
            </div>
            <ul className='pl-4'>
                {operationsArray.map((item,index)=>{
                    return <li key={index} className= {`mr-1 py-0.5 cursor-pointer ${currentOperation === `op${index+1}` ? 'text-orange-500' : 'text-white hover:text-orange-700'}`} onClick={() => setCurrentOperation(index)}>Operation {index+1}</li>
                })}
            </ul>  
            
            <button onClick={handleOpenModal} className='border-t border-b min-w-full mt-2 p-1 pl-4 bg-gray-900 text-left'>{plusIcon} add operation</button>      
            <SelectOpType isOpen={isOpen} onClose={handleCloseModal} />
            
 
        </div>
    )
}