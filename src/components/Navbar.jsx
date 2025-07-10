import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <Link to="/"><h2>KGDEV</h2></Link>
        <ul className="Navbar__menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/myposts">My Posts</Link></li>
          <li><Link to="/create">Create Posts</Link></li>
          {
            isLoggedIn ? (
              <li><Link to="/infor">icon</Link></li>
            ): (
                <li>
                  <span><Link to="/login">Login</Link></span>
                  /
                  <span><Link to="/signup">Signup</Link></span>
              </li>   
            )
          }
          
        </ul>
      </nav>
    </>
  )
   
}
  
export default Navbar;