import React, { Component } from 'react';
import './index.css';
//import { Link } from 'react-router-dom';
import Logo from '../images/sobreoviverlogo.png';

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" id="menu">
        <a className="navbar-brand" href="/"><img src={Logo} alt="Logotipo" id="logotipo"></img></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon white" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/" id="home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard" id="dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog" id="blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login"><i class="fas fa-user-circle fa-2x" id="icon-user"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}