import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Corporate from './components/pages/Corporate'
import Batches from './components/pages/Batches'
import Jobs from './components/pages/Jobs'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import BackendStatus from './components/BackendStatus'

function App() {
  return (
   <BrowserRouter>
   <BackendStatus />
   <Routes>
    <Route path='/'  element={<Home/>}></Route> 
    <Route path='/corporate'  element={<Corporate/>}></Route> 
    <Route path='/batches'  element={<Batches/>}></Route> 
    <Route path='/jobs'  element={<Jobs/>}></Route> 
    <Route path='/blog'  element={<Blog/>}></Route> 
    <Route path='/contact'  element={<Contact/>}></Route> 
   </Routes>
   </BrowserRouter>
  )
}

export default App