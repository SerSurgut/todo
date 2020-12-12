import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import List from './pages/List'
import Main from './pages/Main'
import NewTask from './pages/NewTask'
import NotMatchPage from './pages/NotMatchPage'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
          <Route path={'/'} exact component={Main}/>
          <Route path={'/list'} component={List} />
          <Route path={'/newtasks'} component={NewTask} />
          <Route component={NotMatchPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
