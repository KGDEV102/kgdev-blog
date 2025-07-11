import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div className="container">
      <nav className="Navbar">
        <NavLink to="/"><h1>KGDEV</h1></NavLink>
        <ul className="Navbar__menu">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/myposts" className={({ isActive }) => isActive ? "active" : ""}>My Posts</NavLink></li>
          <li><NavLink to="/create">Create Posts</NavLink></li>
          {
            isLoggedIn ? (
              <li><NavLink to="/infor" className={({ isActive }) => isActive ? "active" : ""}>icon</NavLink></li>
            ): (
                <li>
                  <span><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></span>
                  /
                  <span><NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>Signup</NavLink></span>
              </li>   
            )
          }
          
        </ul>
      </nav>
      </div>
    </>
  )
   
}
  
export default Navbar;