import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './auth';

const Login = () => {
  const location = useLocation();
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const auth = useAuth();

  const redirectPath = location.state?.path || '/';

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <label>
        Username:{' '}
        <input type="text" onChange={(e) => setUser(e.target.value)}></input>
      </label>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
