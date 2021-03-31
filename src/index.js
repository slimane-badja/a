import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyAxcvcy56qQVUIdi9FhFxudO4j63HGgVOQ",
    authDomain: "etudiant-e96f9.firebaseapp.com",
    databaseURL: "https://etudiant-e96f9-default-rtdb.firebaseio.com",
    projectId: "etudiant-e96f9",
    storageBucket: "etudiant-e96f9.appspot.com",
    messagingSenderId: "10187592621",
    appId: "1:10187592621:web:5b250fbf2b6d34358c0724",
    measurementId: "G-T65RK6XH4P"
  };


firebase.initializeApp(firebaseConfig);
// var firebaseConfig = {
//   apiKey: "AIzaSyAjUVLVZYmi7fmTbAEgkPRE-f07X2b_Ci0",
//   authDomain: "nasser-8c1af.firebaseapp.com",
//   projectId: "nasser-8c1af",
//   storageBucket: "nasser-8c1af.appspot.com",
//   messagingSenderId: "1041461246154",
//   appId: "1:1041461246154:web:03550651fc7cd75a92dc33"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);



window.store=store;
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
