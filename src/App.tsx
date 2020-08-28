import React from 'react';
import './App.css';
import Header from './components/template/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import User from './components/user/User';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path={'/'} component={Home} exact={true} />
          <Route path={'/usuarios'} component={User} exact={true} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
