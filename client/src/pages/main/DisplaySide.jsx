import { plusIcon } from '../../icons/FontAwesome';

export default function Sidebar({ currentOperation, setCurrentOperation }){
    const operations = ["centre drill","drill for 1/2-13 holes","chamfer","tap 1/2-13 holes",""];

    return (
        <div className="w-64 bg-gray-800 border rounded-md" style={{height:"80vh", overflowY: 'auto',}}>
            <div className="h-16 flex justify-center items-center font-bold text-xl border-b" >
                Operations
            </div>
            <ul className='pl-4'>
                {operations.map((item,index)=>{
                    return <li key={index} className= {`mr-1 py-0.5 cursor-pointer ${currentOperation === `op${index+1}` ? 'text-orange-400' : 'text-white hover:text-orange-700'}`} onClick={() => setCurrentOperation(`op${index+1}`)}>{index+1}. {item}</li>
                })}
            </ul>  
            <button className='border-t border-b min-w-full mt-2 p-1 pl-4 bg-gray-900 text-left'>{plusIcon} add operation</button>      
        </div>
    )
}