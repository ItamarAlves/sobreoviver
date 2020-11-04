import React, { Component } from 'react';
import './index.css';
import Menu from '../../components/Menu';
import Chart from '../../components/Chart';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1>Dashboard</h1>
        <div class="input-group col-12 " id="pesquisaPalavra">
          <input class="form-control border-right-0"
          placeholder="Digite aqui a palavra que deseja pesquisar"/>
          <span class="input-group-append bg-white">
            <button class="btn border border-left-0" type="submit"><i class="fa fa-search"></i></button>
          </span>
        </div>
          <Chart />
        </div>
    );
  }
}
