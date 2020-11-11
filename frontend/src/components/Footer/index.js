import React, { Component } from 'react';
import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="container-footer">
        <footer className="container">
          <div className="row">
            <div className="col-sm-12">
              <h5 className="text-center mt-3 mb-3">Desenvolvido por Elemar e Itamar</h5>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}