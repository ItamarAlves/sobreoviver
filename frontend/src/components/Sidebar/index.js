import React, { useEffect } from 'react';
import './index.css';
import $ from 'jquery';
//import Logo from '../images/sobreoviverlogo.png';

const Sidebar = () => {
  useEffect(() => {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }, []);

  return (
    <div className="sidebarAndNavbar" id="sidebar-wrapper">
      <div className="sidebar-heading"><p id="paragraph-menu">Menu</p></div>
      <div className="list-group list-group-flush">
        <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-clipboard-list fa-lg mr-2 icons-menu"></i>Posts</a>
        <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-spell-check fa-lg mr-2 icons-menu"></i>Palavras Chaves</a>
        <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-project-diagram fa-lg mr-2 icons-menu"></i>Componentes</a>
        <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-users fa-lg mr-2 icons-menu"></i>Pessoas</a>
        <a href="#" className="list-group-item list-group-item-action"><i className="fas fa-sign-out-alt fa-lg mr-2 icons-menu"></i>Sair</a>
      </div>
    </div>
  );
}

export default Sidebar;