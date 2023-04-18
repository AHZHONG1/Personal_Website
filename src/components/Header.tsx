import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info nav-justified fs-5">
        <div className="container-fluid border border-white">
          <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 text-align-center">
              <li className="nav-item">
                <Link className="nav-link" to="/NewestUpdate">Newest update</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">AHZHONG</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;