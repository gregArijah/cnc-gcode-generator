import React, { useState }  from 'react';


function Home() {
  const [brief, setBrief] = useState(0);

  const changeBriefs = () => {
    if (brief<4) setBrief(brief+1);
    else setBrief(0);    
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    //on submit use npm package to send text msg or email 
    alert("That button dont work.LOL! :P ")

  }

  return (
    <div>
        <div className="bg-cnc-background bg-cover text-white min-h-screen max-w-full ">
          <div className='min-h-screen' style={{backgroundColor: 'rgba(35, 35, 100, 0.5)'}}> 
            <div className='flex items-center justify-between'>
              <img className="m-5 h-48 w-72" src= "/images/logos/logosmallwhite.png"/>
              <div className="pr-28">
                <button className="text-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-16 w-48 float-right">
                  Enter App
                </button>
              </div>
            </div>
            <div className= "pl-10 flex">
              <div className='border-solid border-4 rounded-2xl p-8 w-max ' style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', overflowY: 'auto', maxHeight: '500px' }} >
                <div className='opacity-100 space-y-5'> 
                  
                  <div className= {`${brief==0 ? '':'hidden'} space-y-5`}> 
                    <h2 className="text-4xl font-bold ">Revolutionize your CNC programming<br/> with our user-friendly and intuitive software</h2>
                    <p className='text-2xl leading-normal'>Say goodbye to complicated programming and hello to a more efficient workflow<br/>Try our conversational software today and experience the difference for yourself</p>
                  </div>
                  
                  <div className={`${brief == 1 ? '' : 'hidden'} space-y-5`} >
                    <h2 className="text-4xl font-bold">About</h2>
                    <p className='text-2xl leading-snug'>The Javatrol application is a user-friendly and intuitive software designed for machinists by machinists. At its core, the software generates CNC toolpaths, a task that involves complex computational logic and mathematical calculations. Our biggest challenge was to develop a streamlined process that could handle these calculations efficiently and quickly, and then convert the results into 'g-code' for the CNC machine.</p> 
                    <p className='text-2xl leading-snug'>Despite these challenges, we are proud to have created a tool that simplifies CNC programming and improves efficiency in the manufacturing process. Our conversational software allows users to say goodbye to complicated programming and hello to a more streamlined approach. We believe that our product has the potential to significantly improve productivity in the CNC manufacturing industry, and we are excited to see the impact it will have.</p>
                  </div> 
                  
                  <div className={`${brief == 2 ? '' : 'hidden'} space-y-5`} >
                    <h2 className="text-4xl font-bold">Features</h2>
                    <ul className='list-disc list-inside text-2xl leading-snug'>
                      <li>Intuitive user interface designed for easy use</li>
                      <li>3D simulation of toolpaths and machining operations</li>
                      <li>Automatic error detection and correction to prevent machine damage</li>
                      <li>Advanced G-code generation optimized for Fanuc based CNC controllers</li>
                      <li>Customizable tool libraries and cutting parameters for various materials</li>
                      <li>Integrated toolpath optimization to reduce machining time and increase efficiency</li>
                      <li>Support for multiple languages, including English and French</li>
                      <li>Comprehensive user manual and online support resources</li>
                    </ul>
                  </div> 
                  <div className={`${brief == 3 ? '' : 'hidden'} space-y-5`} >
                    <h2 className='text-4xl font-bold'>Repository</h2>
                    <p className='text-2xl leading-snug'>Our project code is hosted on GitHub, and you can view the repository by&nbsp;
                    <a href='https://github.com/gregArijah/javatrol' className='text-2xl leading-snug text-orange-500 underline' target='_blank' rel='noopener noreferrer'>clicking here.</a></p>
                    <p className='text-2xl leading-snug'>In the repository, you'll find all the code for the project, including the frontend and backend code. We've also included documentation on how to run the application and contribute to the project.</p>
                    <p className='text-2xl leading-snug'>If you encounter any issues or have suggestions for improvements, please feel free to open an issue in the repository. We welcome contributions from the community, and we're always looking for ways to improve the project.</p>
                  </div>
                  <div className={`${brief == 4 ? '' : 'hidden'} space-y-5`} >
                    <h2 className='text-4xl font-bold'>Contact</h2>
                    <p className='text-2xl leading-snug'>Let's cut to the chase - you need someone with top-notch design and development skills, and I need a steady supply of coffee to fuel my creative process. I'm excited to connect with you and discuss how my skills and experience can contribute to your team. Let's chat!"</p>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                      <label className="text-lg font-medium" for="name">Name:</label>
                      <input className="rounded-md  text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" type="text" id="name" name="name" required/>

                      <label className="text-lg font-medium" for="email">Email:</label>
                      <input className="rounded-md text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" type="email" id="email" name="email" required/>

                      <label className="text-lg font-medium" for="message">Message:</label>
                      <textarea className="rounded-md  text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" id="message" name="message" rows="5" required></textarea>

                      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                    </form>

                  </div>

                </div> 
              </div>
              <div className="p-10">
                <button onClick={changeBriefs} className="flex items-center justify-top text-8xl bg-orange-500 hover:bg-orange-700 text-white font-bold  px-2.5 pb-4  rounded-full h-20 w-20">
                  {'>'}
                </button>
              </div>  
            </div>
        </div>
      </div>  
    </div>
  );
}

export default Home;
