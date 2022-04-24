import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { ScrollToTop } from './components';

ReactDOM.render(
    <Router>
        <ScrollToTop/>
        <App />
    </Router>
    ,
    document.getElementById('root')
);