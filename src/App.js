import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css'; // Import your CSS file
import Header from './components/Header'; // Import Header component
import Index from './pages/cliente/Index'; // Import Index component
import ClientForm from './pages/cliente/ClientForm'; // Import ClientForm component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cliente/novo" element={<ClientForm />} />
          <Route path="/cliente/edite/:id" element={<ClientForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;