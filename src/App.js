import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import List from './pages/List/List'
import Main from './pages/Main/Main'
import NewTask from './pages/NewTask/NewTask'
import NotMatchPage from './pages/NotMatchPage/NotMatchPage'
import Navbar from './components/Navbar/Navbar'
import Detail  from "./components/Detail/Detail";

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
          <Route path={'/'} exact component={Main}/>
          <Route path={'/list'} exact component={List} />
          <Route path={'/newtasks'} component={NewTask} />
          <Route path={'/list/:id'} component={Detail} />
          <Route component={NotMatchPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
