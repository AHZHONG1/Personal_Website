import './Header.css';
import { Link } from 'react-router-dom';

interface Props {
  position: string
}

function Header({position}: Props) {
  return (
    <div>
      <div className="row row-cols-5 navbar navbar-expand-xl text-bg-info fs-4 text-center m-0 p-0">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='fw-bold navbar-toggler border-0 text-bg-info adjustNamePosition'>
          <Link className="nav-link fw-bold col fs-4" aria-current="page" to="/">AHZHONG</Link>
        </div>
        <div className="collapse navbar-collapse text-bg-info navbar-nav" id="navbarSupportedContent">
          <Link className={"nav-link col pt-1 pb-1".concat((position == "NewestUpdate") ? " selfDefinedCurrentSection" : "")} to="/NewestUpdate" id='NewestUpdate'>Newest update</Link>
          <Link className={"nav-link col pt-1 pb-1".concat((position == "AboutUs") ? " selfDefinedCurrentSection" : "")} to="/AboutUs" id='AboutUs'>About us</Link>
        </div>
        <div className="collapse navbar-collapse text-bg-info navbar-nav">
          <Link className={"nav-link active fw-bold col pt-1 pb-1".concat((position == "Home") ? " selfDefinedCurrentSection" : "")} aria-current="page" to="/">AHZHONG</Link>
        </div>
        <div className="collapse navbar-collapse text-bg-info navbar-nav" id="navbarSupportedContent">
          <Link className={"nav-link col pt-1 pb-1".concat((position == "Projects") ? " selfDefinedCurrentSection" : "")} to="/Projects" id='Projects'>Projects</Link>
          <Link className={"nav-link col pt-1 pb-1".concat((position == "Skills") ? " selfDefinedCurrentSection" : "")} to="/Skills" id='Skills'>Skills</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;