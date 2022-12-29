import React from 'react'

const Navbar =(props) =>{
  const local = localStorage.getItem('email')
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      <div class="container-fluid">

        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          {props.isLoggedIn ? (
          <><a href="/Login"><button className='btn btn-outline-primary ms-auto px-4 rounded-pill'>
              <i className='fa fa-sign-in me-2'></i>Login
            </button></a><a href="/Register"><button className='btn btn-outline-primary ms-2 px-4 rounded-pill '>
              <i className='fa fa-user-plus me-2'></i> Register</button></a></> 
 ) : (
  <><i class="fa fa-user"> | {local}</i><><a href="/Dashboard"><button className='btn btn-outline-primary ms-2 px-4 rounded-pill '>
                <i></i> Dashboard</button></a><a href="/Logout"><button className='btn btn-outline-primary ms-2 px-4 rounded-pill '>
                  <i className='fa fa-sign-out me-2'></i> Logout</button></a></></> 
         )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar