import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import Home from './Pages/Home'
import About from './Pages/About'
import LogIn from './Pages/LogIn'
import New from './Pages/New'
import Show from './Pages/Show'
import Edit from './Pages/Edit'
import Transactions from './Pages/Transactions'
import Subscriptions from './Pages/Subscriptions'
import FourOFour from './Components/FourOFour'


function App() {
  
  return (
      <div className='app-container'>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
          <Route path='/transactions/about' element={<About/>}/>
          <Route path='/transactions/login' element={<LogIn/>}/>
          <Route path='/transactions/subscriptions' element={<Subscriptions/>}/>
          <Route path='/transactions/new' element={<New/>}/>
          <Route path='/transactions/:id' element={<Show/>}/>
          <Route path='/transactions/:id/edit' element={<Edit/>}/>
          <Route path='*' element={<FourOFour/>}/>
        </Routes>
      </div>
  )
}

export default App
