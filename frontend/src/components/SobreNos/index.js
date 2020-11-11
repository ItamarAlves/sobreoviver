import React, { Component } from 'react';
import './index.css';
import FotoElemar from '../images/elemar.jpg';
import FotoItamar from '../images/itamar.jpg';

export default class SobreNos extends Component {
  render() {
    return (
      <div id="container-sobreNos">
      <div className="container mt-5 pt-3 pb-3">
        <div className="row">
          <div className="col-sm-6 text-center">
            <img src={FotoElemar} className="img-fluid foto-sobreNos" alt="Foto Elemar"></img>
            <h1 className="titulo-nome">Elemar Leonel</h1>
            <p className="descricao">Formado em Análise e Desenvolvimento, graduando pelo 8º período de Sistemas de Informação.</p>
            <div className="redes-sociais">
              <a href="" className="btn btn-redesSociais"><i class="fab fa-instagram"></i></a>
              <a href="" className="btn btn-redesSociais ml-3"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <img src={FotoItamar} className="img-fluid foto-sobreNos" alt="Foto Itamar"></img>
            <h1 className="titulo-nome">Itamar Alves</h1>
            <p className="descricao">Formado em Análise e Desenvolvimento, graduando pelo 8º período de Sistemas de Informação.</p>
            <div className="redes-sociais">
              <a href="" className="btn btn-redesSociais"><i className="fab fa-instagram"></i></a>
              <a href="" className="btn btn-redesSociais ml-3"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}