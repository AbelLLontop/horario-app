import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import HoraryProvider from './contexts/HoraryProvider';
import AppRouter from './routes/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HoraryProvider>
        <AppRouter />
      </HoraryProvider>
    </BrowserRouter>
  </React.StrictMode>
);
