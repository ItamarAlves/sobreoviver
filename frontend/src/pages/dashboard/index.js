import React from 'react';
import './index.css';
import Menu from '../../components/Menu';
import Charts from '../../components/Charts';
import Footer from '../../components/Footer';

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <h1 id="text-dashboard">Dashboard</h1>
      <form id="formPalavra" action={Charts} method="GET" >
        <div class="input-group col-12 " id="pesquisaPalavra">
          <input class="form-control border-right-0" id="palavra"
            placeholder="Digite aqui a palavra que deseja pesquisar" />
          <span class="input-group-append bg-white">
            <button class="btn border border-left-0" type="submit"><i class="fa fa-search"></i></button>
          </span>
        </div>
        <div className="col-12">
          <small id="emailHelp" class="form-text text-muted">Separe os termos por vírgula. Ex.: Termo 1, Termo 2, Termo 3.</small>
        </div>
      </form>
      <div className="container-fluid">
        <div className="row">
          <Charts />
        </div>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Dashboard;
