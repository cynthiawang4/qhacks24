import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-rtv4bk7kv8meirb3.us.auth0.com"
    clientId="bcmwBC9iWYVeQJTkutFDtBhcA2Ovf0TH"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/choose"
    }}
  >
    <App />
  </Auth0Provider>
);
