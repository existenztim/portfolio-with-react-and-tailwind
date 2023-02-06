import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './App.css'
import Header from './components/Header'
import Resume from './components/Resume'
import Portfolio from './components/portfolio'
import About from './components/About'

function App() {

  return (
    <div className="App">
      <Sidenav/>
      <Header/>
      <About/>
      <Resume/>
      <Portfolio/>
    </div>
  )
}

export default App
