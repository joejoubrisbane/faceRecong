import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';



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
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    // notify: notifyReducer,
    // settings: settingsReducer
});

// Check for settings in localStorage
// if (localStorage.getItem('settings') == null) {
//     // Default settings
//     const defaultSettings = {
//         disableBalanceOnAdd: true,
//         disableBalanceOnEdit: false,
//         allowRegistration: false
//     };
//
//     // Set to localStorage
//     localStorage.setItem('settings', JSON.stringify(defaultSettings));
// }

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
     rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
