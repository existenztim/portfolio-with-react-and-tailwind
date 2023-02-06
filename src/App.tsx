import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Sidenav/>
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App
