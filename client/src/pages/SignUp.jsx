import { useState } from 'react';
import MyModal from '../components/modalSmall'; 
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../utils/api';

export default function UserCreate( {isOpen, onClose, openLogin} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSignUp = (e) => {
      e.preventDefault();

      

      if (!username.trim() || !password.trim()) {
        alert('Please enter a username and password');
        return;
      }

      createUser({ username, password })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log('User created successfully');
            alert('User created successfully');
            openLogin();
            setPassword('');
            setUsername('');
            onClose();  
            
          } else {
            console.log('Create user failed');
            alert('Create user failed');
            onClose();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
  const handleCloseModal = () => {
    onClose();
  };

  const changeForm = () => {
    openLogin();
    onClose();
  };


  return (
    <div>
      
      <MyModal isOpen={isOpen} onClose={handleCloseModal}>
        <div className="text-2xl font-medium mb-4">Sign Up</div>
        <form onSubmit={handleSignUp}>
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

          <div className='flex flex-row items-baseline'>
              <button type="submit" onClick={handleSignUp} className="m-4 p-2 bg-blue-500 text-white font-medium">
                Sign Up
              </button>
              <div onClick={changeForm} className="text-sm mb-4 underline cursor-pointer hover:bg-gray-600">Login</div>
          </div>
        </form>

      </MyModal>
    </div>
  );
};
