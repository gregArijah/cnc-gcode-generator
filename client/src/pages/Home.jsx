import React, { useState, useEffect, useRef }  from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import UserLogin from './Login';
import UserSignUp from './SignUp';

import { circleRightIcon } from '../icons/FontAwesome';

function Home() {
  const [brief, setBrief] = useState(0);
  const [scroll, setScroll] = useState('');
  const myRef = useRef(null);

  useEffect(()=>{
      myRef.current.scrollTop = 0;
  },[brief])

  const changeBriefs = () => {  //i made a funny haha
    if (brief<5) setBrief(brief+1);
    else setBrief(0);    
  }
  
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  
  const handleSubmit =(event) => {
    event.preventDefault();
    //on submit use npm package to send text msg or email 
    setName('');
    setEmail('');
    setMessage('');    
    alert("This button doesn't do anything yet. Im not sure if to save the message to server or send to myself by email or text. ")
  }

  const navigate = useNavigate();
  

  const handleEnterApp = () => { 
    // const isAuthenticated = localStorage.getItem('javatrolToken') != null;
    // if (isAuthenticated) {
    //     window.location.href = '/app';
    //     console.log('logged in');
    // } else {
      setIsLoginOpen(true);
    //}
  };
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleLoginClose = () => { setIsLoginOpen(false)}; 
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleSignUpClose = () => { setIsSignUpOpen(false)};

  const changeForm = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignUpOpen(!isSignUpOpen);
  }

  return (
    <div>
        <UserLogin isOpen={isLoginOpen} onClose={handleLoginClose} openSignUp={changeForm}/>  
        <UserSignUp isOpen={isSignUpOpen} onClose={handleSignUpClose} openLogin={changeForm}/>
        <div className="bg-cnc-background bg-cover text-white min-h-screen max-w-full bg-center">
          <div className='min-h-screen' style={{backgroundColor: 'rgba(35, 35, 100, 0.5)'}}> 
            <div className='flex items-center justify-between'>
              <img className="m-5 h-36 sm:h-48" src= "images/logos/logosmallwhite.png"/> 
              <div className="pr-4 md:pr-28">
                <Link role='button' to='#' onClick={handleEnterApp} className="flex items-center justify-center sm:text-2xl bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full h-16 sm:h-16 sm:w-48 float-right">
                  Enter App
                </Link>
                
              </div>
            </div>
            <div className= "p-2 md:pl-10 md:flex">
              <div className='border-solid border-4 rounded-2xl p-8 md:w-full' style={{backgroundColor: 'rgba(0, 0, 0, 0.4)', overflowY: 'auto', maxHeight: '500px' }} ref={myRef} >
                <div className='opacity-100 space-y-5'> 
                  
                  <div className= {`${brief==0 ? '':'hidden'} space-y-5`}> 
                    <h2 className="text-4xl font-bold ">Revolutionize your CNC programming<br/> with our user-friendly and intuitive software</h2>
                    <p className='text-2xl leading-normal'>Say goodbye to complicated programming and hello to a more efficient workflow.<br/>Try our conversational software today and experience the difference for yourself!</p>
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
                    <h2 className='text-4xl font-bold'>Tech Stack</h2>
                    <p className='text-2xl leading-snug'>The following technologies were used during the development of this project: </p>
                    <ul className='list-disc list-inside text-2xl leading-snug'>
                      <li>Front-end: React, JS, HTML, CSS, TailwindCSS</li>
                      <li>Back-end: Node.js, Express, MongoDB, Apollo</li>
                      <li>API: GraphQL</li>
                      <li>Authentication: JWT, Passport.js</li>
                      <li>Deployment: GitHub Pages, Heroku</li>
                      <li>Version Control: Git, GitHub</li>
                    </ul>
                  </div>
                  <div className={`${brief == 5 ? '' : 'hidden'} space-y-5`} >
                    <h2 className='text-4xl font-bold'>Contact</h2>
                    <p className='text-2xl leading-snug'>Let's cut to the chase - you need someone with top-notch design and development skills, and I need a steady supply of coffee to fuel my creative process. I'm excited to connect with you and discuss how my skills and experience can contribute to your team. Let's chat!"</p>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                      <label className="text-lg font-medium" htmlFor="name">Name:</label>
                      <input className="rounded-md  text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" type="text" id="name" value={name}  onChange={(event) => setName(event.target.value)} required/>

                      <label className="text-lg font-medium" htmlFor="email">Email:</label>
                      <input className="rounded-md text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>

                      <label className="text-lg font-medium" htmlFor="message">Message:</label>
                      <textarea className="rounded-md  text-black border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" id="message" value={message} rows="5" onChange={(event) => setMessage(event.target.value)} required></textarea>

                      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                    </form>

                  </div>

                </div> 
              </div>
              <div className="p-2">
                <button onClick={changeBriefs} className="flex items-center justify-center text-6xl md:text-7xl hover:text-orange-700 text-orange-500 px-2.5 pb-4">
                  {circleRightIcon}
                </button>
              </div>  
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
