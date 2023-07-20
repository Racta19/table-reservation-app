import './App.css';
import Home from './scanerio/Home';
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

import logo from "./assets/Logo.svg"
import basket from './assets/Basket.svg'
import { useState } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}


const Menu = () => (
  <>
    <NavLink className="navLink" to="/">Home</NavLink>
    <NavLink className="navLink" to="/">About</NavLink>
    <NavLink className="navLink" to="/">Menu</NavLink>
    <NavLink className="navLink" to="/">Reservations</NavLink>
    <NavLink className="navLink" to="/">Order Online</NavLink>
    <NavLink className="navLink" to="/">Login</NavLink>
  </>
)

function Layout () {
  const [toggleMenu, setToggleMenu] =  useState(false)
  
  return (
    <div>
      <nav className="container">
        <img className="navLogo" src={logo} alt="logo" />
        <div className='link'>
          <Menu />
        </div>
        <img src={basket} alt='basket' />
      </nav>

      <Outlet />

      <footer className="footer">
        <img src={logo} alt="logo" />
        <div className="dashboard">
          <Menu />
        </div>
        <div className="content">
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="socialMedia">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  )
}



export default App;
