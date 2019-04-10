import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div>
            <App source="/data/sk/101110101.html"/>
            <App source="/data/sk/101110102.html"/>
            <App source="/data/sk/101110103.html"/>
            <App source="/data/sk/101110104.html"/>
            <App source="/data/sk/101110105.html"/>
            <App source="/data/sk/101110106.html"/>
        </div>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
