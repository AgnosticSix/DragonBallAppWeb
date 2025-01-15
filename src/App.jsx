import { BrowserRouter, Routes, Route } from 'react-router';
import { CounterApp } from './CounterApp';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CounterApp value={0} />} />
            </Routes>
        </BrowserRouter>
    );
}