import { useState } from 'react'
import Sidenav from './components/Sidenav'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div className="App">
      <Sidenav/>
      <Header/>
    </div>
  )
}

export default App
