import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { ProductProvider } from './context/ProductContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ProductProvider>
    <App />
    </ProductProvider>
  </React.StrictMode>
);
