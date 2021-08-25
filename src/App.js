import React from 'react';
import './App.css';
import Homescreen from './screens/Homescreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import {useGlobalContext} from './Context';
import GetStarted from './screens/GetStarted';
import Planform from './screens/Planform';

function App() {
  const {authorizeUser} = useGlobalContext();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        authorizeUser(authUser);
      }else{
        authorizeUser(null);
      }
    })
    return () => unsubscribe;
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/getstarted'>
            <GetStarted></GetStarted>
          </Route>
        
          <Route exact path='/homescreen'>
            <Homescreen></Homescreen>
          </Route>

          <Route path='/planform'>
            <Planform></Planform>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
