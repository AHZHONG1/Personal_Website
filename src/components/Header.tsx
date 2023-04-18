import './Header.css';
import { Link } from 'react-router-dom';

interface Props {
  position: string
}

function isTargetSize(size: string) {
  // https://stackoverflow.com/a/8876069
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  )
  if (width <= 576 && size == 'xs') return true
  if (width <= 768 && size == 'sm') return true
  if (width <= 992 && size == 'md') return true
  if (width <= 1200 && size == 'lg') return true
  if (width <= 1400 && size == 'xl') return true
  if (width > 1400 && size == 'xxl') return true
  return false
}

function Header({ position }: Props) {
  let result
  if ((result = document.getElementById(`${position}`)) != null) {

    if (isTargetSize('lg')) {
      console.log(result)
      result.classList.add('disabled');
    }
  }

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
          <Link className="nav-link col" to="/NewestUpdate" id='NewestUpdate'>Newest update</Link>
          <Link className="nav-link col" to="/AboutUs" id='AboutUs'>About us</Link>
        </div>
        <div className="collapse navbar-collapse text-bg-info navbar-nav">
          <Link className="nav-link active fw-bold col" aria-current="page" to="/">AHZHONG</Link>
        </div>
        <div className="collapse navbar-collapse text-bg-info navbar-nav" id="navbarSupportedContent">
          <Link className="nav-link col" to="/Projects" id='Projects'>Projects</Link>
          <Link className="nav-link col disabled" to="/Skills" id='Skills'>Skills</Link>
        </div>
      </div>





      {/* <nav className="navbar navbar-expand-lg text-bg-info fs-5">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-bg-info border border-white" id="navbarSupportedContent">
            <ul className="navbar-nav text-align-center">
              <li className="nav-item">
                <Link className="nav-link" to="/NewestUpdate">Newest update</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs">About us</Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse text-bg-info border border-white">
            <ul className="navbar-nav text-align-center">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">AHZHONG</Link>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse text-bg-info border border-white" id="navbarSupportedContent">
            <ul className="navbar-nav text-align-center">
              <li className="nav-item">
                <Link className="nav-link" to="/Projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Skills">Skills</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
}

export default Header;