import React from 'react';
import './header.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from '../HomePage/home';
import { ShopXaliner } from '../Shop/shop_xali';
import SVGComponent, { Moon } from './svg';

export const Header = () =>{
    
    return (
        <header style={{}}>
  <BrowserRouter>
<nav className="navbar navbar-expand-lg " style={{backgroundColor:'inherit',color:'inherit'}}>
  <div className="container-fluid" >
    <Link to={"/"}>
  <img className='nav__logo' src="https://i.postimg.cc/fTBzGXRY/logo.png" alt="" />
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={"/"}>

        <li className="nav-item">
          <a className="nav-link active" style={{color:'inherit'}} aria-current="page" >Home</a>
        </li>
        </Link>
        <li className="nav-item" >
          <a className="nav-link"  href="#" style={{color:'inherit'}}>Mer Masin</a>
        </li>
 
        <li className="nav-item dropdown" style={{backgroundColor:'inherit'}}>
          <a style={{color:'inherit'}} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Xanut
          </a>
          <ul className="dropdown-menu">
            <li><a style={{color:'inherit'}} className="dropdown-item" href="#">Tangaran</a></li>
            <Link to={"/shop"}>

            <li><a style={{color:'inherit'}} className="dropdown-item" >Shop</a></li>
            </Link>
        
          </ul>
        </li>
        <li className="nav-item d-flex align-items-center">
        <div className="form-check form-switch ">
  <input onChange={()=>document.body.classList.toggle("dark")} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

</div>
<div className="">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon text-dark" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg></div>
  </li>
      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Routes>
<Route path="/shop" element={<ShopXaliner />} />
</Routes>
</BrowserRouter>
        
        </header>
    )
}
