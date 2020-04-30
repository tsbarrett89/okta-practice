import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  const CALLBACK_PATH = '/implicit/callback'
  return (
    <div>
      <Route path={CALLBACK_PATH} />

    </div>
  );
}

export default App;
