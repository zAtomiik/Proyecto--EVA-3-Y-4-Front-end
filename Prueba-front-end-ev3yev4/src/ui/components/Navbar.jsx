
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-color-alert" href="#">Inacap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/animes">Anime</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/comics">Comic</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">Logout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  )
}

export default Navbar;

