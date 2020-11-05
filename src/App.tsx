import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Common/header';
import {Home, Board, SignIn, MyBoard } from './pages';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/myBoard" component={MyBoard} />
      </Switch>
    </div>
  );
}

export default App;
