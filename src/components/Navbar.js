import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Navbar() {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login")
  }
  let location = useLocation();
  // useEffect(()=>{
  //   // console.log(location.pathname);
  // },[location])
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="https://t4.ftcdn.net/jpg/04/06/91/91/360_F_406919161_J0pGxe1sewqnk5dnvyRS77MKmEd6SVac.jpg" alt="" height={"50px"} /> Vastukalaa Furnitures</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:'865px'}}>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : "" }`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : "" }`} to="/contact">Contact Us</Link>
              </li>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <Link className="btn btn-secondary mx-1" to='/login' role='button'>Login</Link>
              <Link className="btn btn-secondary mx-1" to='/signup' role='button'>Signup</Link>
            </form>: <button onClick={handleLogout} className="btn btn-secondary">LogOut</button>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
