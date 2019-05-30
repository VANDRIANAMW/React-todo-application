import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Listaprincipal from './CamiloApp';



ReactDOM.render(<Listaprincipal/>, document.getElementById('root'));



serviceWorker.unregister();
