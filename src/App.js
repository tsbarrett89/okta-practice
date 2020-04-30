import React from 'react';
import { Route } from 'react-router-dom';
import { Security } from '@okta/okta-react';


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
        <Route path={CALLBACK_PATH} />
      </Security>
    </div>
  );
}

export default App;
