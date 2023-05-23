import { useState } from 'react';
import MyModal from '../components/modalSmall'; 
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api';

export default function UserLogin( {isOpen, onClose} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
      e.preventDefault();

      

      if (!username.trim() || !password.trim()) {
        alert('Please enter a username and password');
        return;
      }

      loginUser({ username, password })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console.log('Logged in');
            console.log(res.data.token);
            console.log(res.data.user._id);
            localStorage.setItem('javatrolToken', res.data.token);
            localStorage.setItem('javatrolUserId', res.data.user._id);
            //navigate to the app page
            navigate('/app');
            onClose();
            
          } else {
            console.log('Login failed');
            alert('Login failed');
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
