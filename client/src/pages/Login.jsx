import { useState } from 'react';
import MyModal from '../components/modalSmall'; 
import { Link, useNavigate } from 'react-router-dom';

export default function UserLogin( {isOpen, onClose} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
      e.preventDefault();
        // Perform login logic here
        // You can use the `username` and `password` states to access the entered values
        // Example:
        if (username === 'admin' && password === 'password') {
            // Successful login
            console.log('Logged in');
            //navigate to the app page
            navigate('/app');


            
            console.log('navigated');
            onClose();
      
            
        } else {
            // Failed login
            console.log('Login failed');
        }
    };




  
  const handleCloseModal = () => {
    onClose();
  };



  return (
    <div>
      {/* <button onClick={handleOpenModal}>Enter App</button> */}

      <MyModal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="text-2xl font-medium mb-4">Login</div>
        <form onSubmit={handleLogin}>
          <p className="m-4 mb-2 text-lg font-medium">Username:</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="m-4 p-2 border text-black"
          />

          <p className="m-4 mb-2 text-lg font-medium">Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="m-4 p-2 border text-black"
          />

          <button type="submit" onClick={handleLogin} className="m-4 p-2 bg-blue-500 text-white font-medium">
            Login
          </button>
        </form>

      </MyModal>
    </div>
  );
};
