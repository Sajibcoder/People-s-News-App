import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <h2 className="navbar-brand">People's News App</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active"  to="/buisness">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/food">Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/politics">Politics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
              </li>
            </ul>

            <div className={`form-check form-switch text-${props.mode === 'info' ? 'dark' : 'info'}`}>
              <input className="form-check-input" onClick={props.Darkmode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


export default Navbar