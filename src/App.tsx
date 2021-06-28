import React from 'react';
import { Switch } from 'react-router';
import SignIn from './Pages/SignIn';
import { Route } from 'react-router-dom';
import { Home } from './Pages/Home';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signIn" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
