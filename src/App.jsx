import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, redirect } from 'react-router-dom'
import BsNav from './components/BsNav'
import Home from './views/Home'
import NotFound from './views/NotFound'
import CounterRedux from './views/CounterRedux'
import CounterSimple from './views/CounterSimple'
import TodoRedux from './views/TodoRedux'
import OnlineProducts from './views/OnlineProducts'
import OnlineProductSingle from './views/OnlineProductSingle'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <BsNav></BsNav>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/counter/redux' Component={CounterRedux} />
          <Route path='/counter/simple' Component={CounterSimple} />
          <Route path='/todo/redux' Component={TodoRedux} />
          <Route path='/online/products' Component={OnlineProducts} />
          <Route path='/online/product/single/:id' Component={OnlineProductSingle} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
