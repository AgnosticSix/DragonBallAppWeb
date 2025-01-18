import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './styles.css';
import { initializeData } from './utils/localStorageUtils';
import data from './api/data.json';

const root = document.getElementById('root');

initializeData(data);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);