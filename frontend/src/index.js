import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import * as serviceWorker from './serviceWorker';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
   
    <App />
    
  </StrictMode>
);

reportWebVitals();
serviceWorker.register();