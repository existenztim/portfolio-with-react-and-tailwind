import { useState } from 'react';
import Sidenav from './components/Sidenav';
import './App.css';
import Header from './components/Header';
import Resume from './components/Resume';
import About from './components/About';
import Footer from './components/Footer';
import Briefcase from './components/Briefcase';
import AOS from 'aos';

function App() {
  AOS.init();
  return (
    <div className="App">
      <Sidenav />
      <Header />
      <About />
      <Resume />
      <Briefcase />
      <Footer />
    </div>
  );
}

export default App;
