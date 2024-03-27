import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return<>
   <div className="d-flex justify-content-center mt-4">
   <ul class="nav nav-underline">
  <li class="nav-item">
    <Link to='/all' class="nav-link" href="#">All</Link>
  </li>
  <li class="nav-item">
    <Link to='/fullstackdevelopment' class="nav-link" href="#">FULL STACK DEVELOPMENT</Link>
  </li>
  <li class="nav-item">
    <Link to='/datascience' class="nav-link" href="#">DATA SCIENCE</Link>
  </li>
  <li class="nav-item">
    <Link to='/cybersecurity' class="nav-link" href="#">CYBER SECURITY</Link>
  </li>
  <li class="nav-item">
    <Link to='/career' class="nav-link" href="#">CAREER</Link>
  </li>
</ul>
   </div>
  </>
}

export default Navbar