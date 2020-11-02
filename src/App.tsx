import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Board from './pages/Board';
import Header from './components/Common/header';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/board" component={Board} />
      </Switch>
    </div>
  );
}

export default App;
