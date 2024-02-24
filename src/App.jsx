import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import Users from './pages/Users'
import Verification from './pages/Verification'
import APPNav from './components/APPNav'

function App () {
  return (
    <div>
    <APPNav />
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Verification" element={<Verification />} />
    </Routes>
    </div>
  )
}

export default App
