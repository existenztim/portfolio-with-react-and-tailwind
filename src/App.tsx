import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './App.css'
import Header from './components/Header'
import Resume from './components/Resume'

function App() {

  return (
    <div className="App">
      <Sidenav/>
      <Header/>
      <Resume/>
    </div>
  )
}

export default App
