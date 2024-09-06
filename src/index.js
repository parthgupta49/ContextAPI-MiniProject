import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './ Context/AppContext';
const htmlRoot = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlRoot);
reactRoot.render(
    <AppProvider>
        <App/>
    </AppProvider>
)