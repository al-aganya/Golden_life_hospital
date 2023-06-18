import React from 'react'
import "./home.css"
function NavB() {
  return (
<>
    <nav id="mainNavigation" style={{background:' #040224'}}>
            <div role="navigation">
                <div className="py-3 text-center border-bottom">
                    <img className="col-lg-2 col-md-2 mx-auto img-thumbnail" style={{maxWidth:"60px",maxHeight:"60px"}} src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='' />
                    <br/>
                    <small style={{color:'goldenrod',opacity:'1'}}><i>GoldenLife Victors</i></small>
                </div>
            </div>

            <div className="navbar-expand-md">
                <div className="navbar-dark text-center my-2">
                    <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span style={{fontWeight:'bolder',color:'goldenrod'}}><i className="fas fa-bars"></i></span> 
                        </button>
                </div>
                <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto ">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/programmes">Programmes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='/book_s'>Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/donate">Donate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
</>    
  )
}

export default NavB
