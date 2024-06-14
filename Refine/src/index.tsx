import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Refine } from '@pankod/refine';
import Employees from './pages/Employees';
import Clients from './pages/Clients';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/employees" element={<Employees />} />
                <Route path="/clients" element={<Clients />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Refine>
            <App />
        </Refine>
    </React.StrictMode>
);
