import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <NavLink className="navbar-brand" to={'/Home'}>Hidden brand</NavLink>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <NavLink className="nav-link " to={'/Home'}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to={'/Login'}>Login</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </li>
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <p className='my-2 mx-2'>usuario</p>
        </li>
        <li className="nav-item">
          <button className='btn btn-primary'>cerrar sesion</button>
        </li>
      </ul>

    </div>
  </div>
</nav>
     );
}

export default Navbar;