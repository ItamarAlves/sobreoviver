import React, { Component } from 'react';
import './index.css';
import Menu from '../../components/Menu';
import Charts from '../../components/Charts';
import Footer from '../../components/Footer';

<<<<<<< HEAD
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h1 id="text-dashboard">Dashboard</h1>
        <div class="input-group col-12 " id="pesquisaPalavra">
          <input class="form-control border-right-0"
=======
const Dashboard = () => {
  return (
    <div>
      <Menu />
      <h1 id="text-dashboard">Dashboard</h1>
      <form id="formPalavra" action={Charts} method="GET" >
        <div class="input-group col-12 " id="pesquisaPalavra">
          <input class="form-control border-right-0" id="palavra"
>>>>>>> c61be3455bdf8882c19165802479e88a5b360c67
            placeholder="Digite aqui a palavra que deseja pesquisar" />
          <span class="input-group-append bg-white">
            <button class="btn border border-left-0" type="submit"><i class="fa fa-search"></i></button>
          </span>
        </div>
        <div className="col-12">
          <small id="emailHelp" class="form-text text-muted">Separe os termos por vírgula. Ex.: Termo 1, Termo 2, Termo 3.</small>
        </div>
<<<<<<< HEAD
        <div className="container-fluid">
          <div className="row">
            <Charts />
          </div>
        </div>
        <div className="mt-5">
          <Footer></Footer>
=======
      </form>
      <div className="container-fluid">
        <div className="row">
          <Charts />
>>>>>>> c61be3455bdf8882c19165802479e88a5b360c67
        </div>
      </div>
    );
  }
}
