import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing'
import Details from './Pages/Details'
import Home from './Pages/Home'
import './bootstrap.min-2.css'
function App(){
  return (
    <>
    <Header />

<Routes>
  <Route path='/' element={<Landing />}/>
  <Route path='/details' element={<Details />}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
    <Footer />
    </>
  )
}

export default App