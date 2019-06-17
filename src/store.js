import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import settingReducer from "./reducers/settingReducer";
import notifyReducer from "./reducers/notifyReducer.js";
import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore"; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { reduxFirestore, firestoreReducer } from "redux-firestore"; // <- needed if using firestore

const firebaseConfig = {
  apiKey: "AIzaSyC6rHHcP2S1RHoKZG8dZrcFIRX_T7Q4klY",
  authDomain: "robot-friend-b4cd3.firebaseapp.com",
  databaseURL: "https://robot-friend-b4cd3.firebaseio.com",
  projectId: "robot-friend-b4cd3",
  storageBucket: "robot-friend-b4cd3.appspot.com",
  messagingSenderId: "202082833271",
  appId: "1:202082833271:web:c1402d43dbc35061"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users"
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithFirebase = composeEnhancers(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase) // <- needed if using firestore
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
  notify: notifyReducer,
  setting: settingReducer
});
//Check for setting in localStorage
if(localStorage.getItem('setting')==null){
    const defaultSetting={
        disableRobotsOnAdd:true,
        disableRobotsOnEdit:false,
        allowRegistration:false,
    };
    localStorage.setItem('setting',JSON.stringify(defaultSetting))
}
// Create store with reducers and initial state
const initialState = {setting:JSON.parse(localStorage.getItem('setting'))};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,

);

export default store;
