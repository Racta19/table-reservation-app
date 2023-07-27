import './App.css';
import Home from './scanerio/Home/Home';
import Reservation from './scanerio/Reservation/Reservation';

import { Routes, Route, Outlet, Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiShoppingBasket2Fill } from 'react-icons/ri';

import heroFood from "./assets/restauranfood.jpg"
import logo from "./assets/Logo.svg"
import { useState } from 'react';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Route>
    </Routes>
  );
}

const Menu = () => (
  <>
    <Link className="navLink" to="/">Home</Link>
    <Link className="navLink" to="/">About</Link>
    <Link className="navLink" to="/">Menu</Link>
    <Link className="navLink" to="/reservation">Reservations</Link>
    <Link className="navLink" to="/">Order Online</Link>
    <Link className="navLink" to="/">Login</Link>
  </>
)

function Layout () {
  const [toggleMenu, setToggleMenu] =  useState(false)
  const [linkPath, setLinkPath] = useState('/reservation'); // Initial path state

  const handleClickPath = () => {
    // Update the path state on button click
    setLinkPath('/reservation');
  };

  return (
    <div>
      <nav className="container">
        <Link className="navLogo" to="/"><img  src={logo} alt="logo" /></Link>
        <div className='link'>
          <Menu />
        </div>

        <div className='hamburgerMenu'>
          {toggleMenu ? <RiCloseLine color="#495E57" size={30} onClick={() => setToggleMenu(false)} /> : <RiMenu3Line color="#495E57" size={30} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
              <div className='hamburgerMenucontainer'>
                <Menu />
              </div>
          )}
        </div>

        <RiShoppingBasket2Fill className='basket' color="#495E57" size={30}/>
      </nav>

      <section className="hero">
        <div className="heroColumn1">
          <h2>Little Lemon </h2>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <Link to={linkPath}>
            <button className="button-primary" onClick={handleClickPath}>
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="heroColumn2">
          <img src={heroFood} alt="heroPic" />
        </div>
      </section>

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
