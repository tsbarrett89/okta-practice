import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


const Login = () => { 
  const { authService } = useOktaAuth();
  const login = () => authService.login('/profile');

  
  return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    )
};
export default Login;