import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ToastProvider } from 'react-toast-notifications';
import {App} from './components';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* autoDismiss={true} we are writing its shorthand i.e, autoDismiss only  */}
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-center">
     <App />
  </ToastProvider>

  </React.StrictMode>
);
