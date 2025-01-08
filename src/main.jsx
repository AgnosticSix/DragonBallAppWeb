import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { FirstApp } from './FirstApp';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstApp />} />
        </Routes>
    </BrowserRouter>
);