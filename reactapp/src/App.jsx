import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import HomePage from './component/HomePage'
import Contact from './component/contact'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [title, setTitle]=useState("Sample Title")
 

  return (
    <>
    <Routes>
      <Route path="/" element={<><HomePage /><TopBar /></>} />
      <Route path="/article" element={<Article title={title} />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
      
  </>
  )
}

export default App
