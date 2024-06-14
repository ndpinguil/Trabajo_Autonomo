import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Refine } from '@pankod/refine';
import Employees from './pages/Employees';
import Clients from './pages/Clients';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>My App</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="/employees">Employees</a>
                        </li>
                        <li>
                            <a href="/clients">Clients</a>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/clients" element={<Clients />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
