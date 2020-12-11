import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import List from './pages/List'
import Main from './pages/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
          <Route path={'/'} exact component={Main}/>
          <Route path={'/list'} component={List} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
