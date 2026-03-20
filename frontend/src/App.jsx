import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PagenotFound from './pages/PagenotFound'
import Mobile from './Products/Mobile'
 const App = () => {
   return (
     <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/mobiles' element={<Mobile/>}></Route>
      <Route path='*' element={<PagenotFound/>}></Route>
     </Routes>
       <Footer/>
     </>
   )
 }
export default App
 