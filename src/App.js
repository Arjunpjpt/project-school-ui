import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">

<Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          
        </Switch>
    
    </Router>
    
    </div>
  );
}

export default App;
