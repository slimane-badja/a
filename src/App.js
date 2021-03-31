import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import RegisterPage from './containers/RegisterPage';
import PrivateRoute from './compenents/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import {isLoggedInUser} from './actions';
function App() {
const auth = useSelector(state => state.auth);
const dispatch = useDispatch()


   useEffect(() =>{
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
    },[]);
  return (
    <div className="App">
      <Router>
         { /* seulement l'utilisateur connecter qui pourrait y acceder */ }
        <PrivateRoute path='/' exact component={HomePage}/>
        
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={RegisterPage}/>
      </Router>
    </div>
  );
}

export default App;
