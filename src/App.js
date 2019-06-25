import React from 'react';
import Nav from './nav';
import './css/App.css';
import Home from './pages/Home';
import Hair from './pages/Hair';
import Video from './pages/Video';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const baseUrl = process.env.PUBLIC_URL;
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path={baseUrl + '/'} exact component={Home}></Route>
          <Route path={baseUrl + '/cine'} exact component={Video}></Route>
          <Route path={baseUrl + '/hair'} exact component={Hair}></Route>
          <Route path={baseUrl + '*'} exact component={Home}></Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
