import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NotFound } from './Components/NotFound'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { MyProfile } from './pages/MyProfile'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path='Profile' element={<MyProfile/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
