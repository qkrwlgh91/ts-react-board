import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route to="/" exact={true} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
