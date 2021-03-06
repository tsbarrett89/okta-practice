import React from 'react';
import { Route } from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import Homepage from './components/Homepage';
import Profile from './components/Profile';

const config = {
  clientId: '0oaapt0s0EjOyHmVd4x6',
  issuer: 'https://dev-861398.okta.com/oauth2/default',
  redirectUri: 'http://localhost:3000/implicit/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

function App() {
  const CALLBACK_PATH = '/implicit/callback'
  return (
    <div>
      <Security {...config}>
        <Route exact path='/' component={Homepage} />
        <Route path={CALLBACK_PATH} component={LoginCallback} />
        <SecureRoute path='/profile' component={Profile} />
      </Security>
    </div>
  );
}

export default App;
