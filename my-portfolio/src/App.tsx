import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartComponent from './components/StartComponent';
import HeaderComponent from './components/HeaderComponent';
import './App.css';
import './assets/index.css'

function App() {
  return (
  <div>
    <HeaderComponent />
    <StartComponent />
  </div>
  );
}

export default App;
