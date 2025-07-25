import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";
function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <>
  
      <nav className="Navbar container ">
        <NavLink to="/"><h1>KGDEV</h1></NavLink>
        <ul className={`Navbar__menu ${isOpen ? "open" : ""} `}>
            
             
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/myposts" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>My Posts</NavLink></li>
          <li><NavLink to="/create" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Create Posts</NavLink></li>
          {
            isLoggedIn ? (
              <li><NavLink to="/infor" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>icon</NavLink></li>
            ): (
                <li>
                  <span><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Login</NavLink></span>
                  /
                  <span><NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Signup</NavLink></span>
              </li>   
            )
          }
         
          
          
        </ul>
        <div className="Navbar__burger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
        </div>
       
      </nav>
     
    </>
  )
   
}
  
export default Navbar;