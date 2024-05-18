import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProviderLoginPage from './pages/provider/providerLogin';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<ProviderLoginPage/>} />
        {/* Add more routes if needed */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
