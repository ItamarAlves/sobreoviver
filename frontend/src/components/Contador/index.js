import React, { Component } from 'react';
import './index.css';

export default class Contador extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
      contadorBrasil: 0,
    }
  }

  alterarContador() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  
  alterarContadorBrasil(){
    this.setState({
      contadorBrasil: this.state.contadorBrasil + 1,
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.alterarContador(), 40000);
    this.interval = setInterval(() => this.alterarContadorBrasil(), 2760000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 id="estatisticas-suicidio">Estatísticas sobre o Suicídio</h1>
            <ul className="timeline mt-3">
              <li>
                <h5><strong>{this.state.contador} Pessoa(s) já se Suicidaram</strong></h5>
                <p>A cada 40 segundos, uma pessoa no mundo comete um suicídio.</p>
                <a className="btn btn-contador" href="http://www.conselho.saude.gov.br/ultimas-noticias-cns/809-um-suicidio-ocorre-a-cada-40-segundos-no-mundo-diz-organizacao-mundial-da-saude" target="blank"><strong>Saber Mais</strong></a>
              </li>
              <li>
                <h5><strong>{this.state.contadorBrasil} Brasileiro(s) já se Suicidaram</strong></h5>
                <p>A cada 46 minutos, uma brasileiro comete um suicídio. </p>
                <a className="btn btn-contador" href="https://guiadafarmacia.com.br/depressao-e-suicidio-uma-pessoa-se-suicida-no-brasil-a-cada-46-minutos/" target="blank"><strong>Saber Mais</strong></a>
              </li>
              <li>
                <h5><strong> Depressão: uma das causas do Suicídio</strong></h5>
                <p>A depressão é um transtorno mental frequente. Em todo o mundo, estima-se que mais de 300 milhões de pessoas,
                  de todas as idades, sofram esse transtorno.
                </p>
                <a className="btn btn-contador" href="https://www.paho.org/pt/topicos/depressao" target="blank"><strong>Saber Mais</strong></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}