import React from 'react'
import {Link} from 'react-router-dom'
import NavRouter from './Router/NavRouter.jsx'
import './App.css'

function App() {

  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className='container-fl'>
          <ul className="nav">
            <li className="nav-item">
              <Link className='nav-link' to="/">Login</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/register">Register</Link>
            </li>
            
          </ul>
        </div>
      </nav>
      

      <div>
        <NavRouter />
      </div>
      
    </>
  )
}

export default App
