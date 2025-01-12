import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Correct package for routing
import React from 'react';
import Front from './Pages/Front';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       
    </>
  );
}

export default App;
