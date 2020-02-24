import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router,Route,browserHistory,Link} from 'react-router';
import Profile from './Profile';

ReactDOM.render(
    // <App />,
    // document.getElementById('root')
    <Router history = {browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/Profile" component={Profile}/>
        
    </Router>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
