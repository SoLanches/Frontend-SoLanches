import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { PagesProvider } from './contexts/pages.context';

ReactDOM.render(
  <BrowserRouter>
    <PagesProvider>
      <App />
    </PagesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

