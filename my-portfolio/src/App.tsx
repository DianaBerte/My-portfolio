import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartComponent from './components/StartComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<StartComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
