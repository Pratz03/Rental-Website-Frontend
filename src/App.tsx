import React from 'react';
import './App.css';
import LoginComponent from './components/LoginComponent';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import AdminPanelComponent from './components/AdminPanelComponent/AdminPanelComponent';

function App() {
  return (
    <div className="App" style={{ display: "block" }}>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="home" element={<Home />} />
        <Route path="admin" element={<AdminPanelComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
