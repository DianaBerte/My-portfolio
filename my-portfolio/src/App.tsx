import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutComponent from './components/AboutComponent';
import HeaderComponent from './components/HeaderComponent';
import ProjectsComponent from './components/ProjectsComponent';
import ContactComponent from './components/ContactComponent';
// import './App.css';
import './assets/header.css'

function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={HeaderComponent} />
      <Route path='/about' Component={AboutComponent} />
      <Route path='/projects' Component={ProjectsComponent}/>
      <Route path='/contact' Component={ContactComponent} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
