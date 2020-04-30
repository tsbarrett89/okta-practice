import React from 'react';
import { useOktaAuth } from '@okta/okta-react';


const Login = () => { 
  const { authState, authService } = useOktaAuth();
  const login = () => authService.login('/profile');

  if( authState.isPending ) { 
    return (
      <div>Loading authentication...</div>
    );
  } else if( !authState.isAuthenticated ) { 
    return (
      <div>
        <button onClick={login}>Login</button>
      </div>
    );
  }
};
export default Login;