import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NotFound } from './Components/NotFound'
import { Services } from './pages/Services'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path='Services' element={<Services/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
