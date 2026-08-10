import "./Navbar.css"
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">

          <div className="col d-flex gap-3">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about-me">About me</NavLink>
            <NavLink className="nav-link" to="/projects">Projects</NavLink>
            <NavLink className="nav-link" to="/experience">Experience</NavLink>
            <NavLink className="nav-link" to="/education">Education</NavLink>
          </div>
        

          

        </div>
      </div>
    </nav>
  )
}

export default Navbar
