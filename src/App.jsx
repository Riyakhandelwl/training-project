import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Home from './meme'
import Post from './postoffice'
import Phone from './phones'

// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
{/* //       <BrowserRouter>
// <Routes>
  
//   <Route path='/phone' element={<Phone/>}/>

  

// </Routes>

// </BrowserRouter> */}

 <Phone/>

    </>
  )
}

export default App;
