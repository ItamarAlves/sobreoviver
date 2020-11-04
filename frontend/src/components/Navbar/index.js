import React from 'react';
import Logo from '../images/sobreoviverlogo.png';

const Navbar = () => {
  return  (
    <nav className="navbar navbar-expand-lg navbar-light sidebarAndNavbar">
      <a>
        <img src={Logo} className="logotipo" id="menu-toggle" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-user-circle fa-2x" id="icon-user"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Sair</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;