import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import {BrowserRouter} from ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/learn-lingo-pet-project">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
