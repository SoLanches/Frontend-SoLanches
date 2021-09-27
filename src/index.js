import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { PagesProvider } from './contexts/pages.context';
import { LoginProvider } from './contexts/login.context'

ReactDOM.render(
  <BrowserRouter>
    <LoginProvider>
      <PagesProvider>
        <App />
      </PagesProvider>
    </LoginProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

