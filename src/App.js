import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Switch>
          <Route path={'/'} exact/>
          <Route path={'/list'} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
