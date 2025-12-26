
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// FIX: Removed manual process.env shim to resolve TypeScript 'window.process' error and follow SDK security guidelines.
// The build system (Vite) manages the injection of process.env.API_KEY into the browser context.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
