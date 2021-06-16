import React, {useEffect} from 'react';
import ReactGA from 'react-ga'
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize("G-DNY6G9NVY7")
        
ReactGA.pageview('ResumeWebApp/');

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
