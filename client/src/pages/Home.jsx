import React from 'react';
//import backgroundImage from '../images/mill-surfacing.jpg';

// import Style from './'

function Home() {
  return (
    <div>
        <div className="bg-cnc-background bg-cover text-white h-screen max-w-full ">
          <div className='h-full' style={{backgroundColor: 'rgba(35, 35, 100, 0.5)'}}> 
            <div className='flex items-center justify-between'>
              <img className="m-5 h-48 w-72" src= "/images/logos/logosmallwhite.png"/>
              <div className="pr-28">
                <button className="text-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-16 w-48 float-right">
                  Enter App
                </button>
              </div>
            </div>
            <div className= "p-10 pt-18">
              <div className='border-solid border-4 rounded-2xl p-8 w-max' style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}} >
                <div className='opacity-100 space-y-5'> 
                  <h2 className="text-4xl font-bold leading-snug">Revolutionize your CNC programming<br/> with our user-friendly and intuitive software</h2>
                  <p className='text-2xl leading-normal'>Say goodbye to complicated programming and hello to a more efficient workflow<br/> Try our conversational software today and experience the difference for yourself</p>
                </div> 
              </div>
            
            </div>
        </div>
      </div>  
    </div>
    // <div className="container mx-auto py-8">
    //   <h1 className="text-3xl font-bold mb-4">Welcome to the Mazatrol Clone</h1>
    //   <p className="mb-8">This is a web-based Mazatrol interpreter for reading and writing Mazatrol programs.</p>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <div className="bg-gray-100 rounded-lg p-4">
    //       <h2 className="text-xl font-bold mb-4">Read Mazatrol Program</h2>
    //       <p className="mb-4">Upload a Mazatrol program file to read its contents and view its graphical representation.</p>
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Upload Mazatrol Program</button>
    //     </div>
    //     <div className="bg-gray-100 rounded-lg p-4">
    //       <h2 className="text-xl font-bold mb-4">Write Mazatrol Program</h2>
    //       <p className="mb-4">Create a new Mazatrol program or edit an existing one using the graphical editor.</p>
    //       <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Create/Edit Mazatrol Program</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Home;
