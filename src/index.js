import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// global variable
let state = {}
// this function will track all of the changes in the state of the application 
// anytime we want to change anything we'll want to use this function to do the changes
// & to also re-render the application 
window.setState = (changes) => {
    // using object.assign so we don't mutuate the actual state
    state = Object.assign({}, state, changes);

    ReactDOM.render(<App />, document.getElementById('root'));
};

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
