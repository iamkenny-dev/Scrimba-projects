import React from 'react'
import './App.css'
import Header from './Header.jsx'
import Maine from './Maine'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <div className="innerFrame">
        <Header />
        <Maine />
        <Footer />
      </div>
    </div>
  )
}

export default App
