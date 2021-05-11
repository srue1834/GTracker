import React from 'react'
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom'
 
import NotSignedIn from './NotSignedIn'
import SignIn from './SignIn'
import VendorProfile from './VendorProfile'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={NotSignedIn}></Route>
          <Route path="/signup" component={SignIn}></Route>
          <Route path="/signin" component={SignIn}></Route>
          <Route path="/profile" component={VendorProfile}></Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
