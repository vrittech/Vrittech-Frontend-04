import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

// import name from 'path'

//Browser Router
//Routes
//Route -> configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App ></App>
    </BrowserRouter>
  </React.StrictMode>
);


