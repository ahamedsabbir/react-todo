import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, redirect } from 'react-router-dom'
import BsNav from './components/BsNav'
import Home from './views/Home'
import NotFound from './views/NotFound'
import Counter from './views/Counter'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <BsNav></BsNav>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/counter/:num' Component={Counter} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
