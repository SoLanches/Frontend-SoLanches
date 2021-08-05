import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { PagesProvider } from './contexts/pages.context';

ReactDOM.render(
  <React.StrictMode>
    <PagesProvider>
      <App />
    </PagesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

