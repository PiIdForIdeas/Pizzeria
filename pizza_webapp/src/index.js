import React from 'react';
/* import ReactDOM from 'react-dom/client'; */
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); */

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
