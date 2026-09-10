import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Wish from './Pages/Home/Wish/Wish';
import Propose from './Pages/Home/Propose/Propose';


const App = () => {
  return (
    <>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/birthday" element={<Wish />} />
       <Route path="/birthday/propose" element={<Propose />} />
    </Routes>
    </>

  )
}

export default App