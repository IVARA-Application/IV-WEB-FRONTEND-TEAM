import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Sugar,Lines} from 'react-preloaders';


import { AuthContextProvider } from './HOC/LoginHOC';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <App />
    <Lines time={1800}/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
