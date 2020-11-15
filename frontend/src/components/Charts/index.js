import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './index.css';
import api from '../../services/api'

export default class Charts extends Component {

  state = {
    palavras: [],
  }

  async componentDidMount() {
    const response = await api.get('/palavra');
    console.log('posiciao 1'+ response.data);
    this.setState({ palavras : response.data });
  }

  constructor(props) {
    super(props);
    // console.log('posiciao 2'+ palavras[0]);
    this.state = {
      chartComparationSearch: {
        labels: [],
        datasets: [{
          label: 'Comparativo dos Termos Pesquisados',
          data: [1500, 1250, 1000, 1325, 1000, 1243, 947],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      
      chartCasesSuicidesRegion: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
          label: 'Casos de Suicídios Por Região',
          data: [12, 28, 16, 10, 13, 9],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },


      chartTopFiveSearchSuicide: {
        labels: ['Rondônia', 'São Paulo', 'Rio de Janeiro', 'Mato Grosso', 'Amazonas'],
        datasets: [{
          label: '5 Maiores Regiões de Pesquisas Relacionadas ao Suicídio',
          data: [300, 250, 290, 150, 130],
          backgroundColor: [
            'rgba(243, 36, 36, 0.2)',
            'rgba(243, 36, 36, 0.2)',
            'rgba(243, 36, 36, 0.2)',
            'rgba(243, 36, 36, 0.2)',
            'rgba(243, 36, 36, 0.2)'
          ],
          borderColor: [
            'rgba(243, 36, 36, 0.4)',
            'rgba(243, 36, 36, 0.4)',
            'rgba(243, 36, 36, 0.4)',
            'rgba(243, 36, 36, 0.4)',
            'rgba(243, 36, 36, 0.4)'
          ],
        }],
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    }
  }

  render() {
    const {palavras} = this.state;
    this.state.chartComparationSearch.label = palavras;
    return (
      <>
        <div className="chart col-sm-12">
          <Bar
            data={this.state.chartComparationSearch}
            options={{
              maintainAspectRatio: false
            }}>
          </Bar>
        </div>

        <div className="chart col-sm-6">
          <Line
            data={this.state.chartCasesSuicidesRegion}
            options={{
              maintainAspectRatio: false
            }}>
          </Line>
        </div>
        <div className="chart col-sm-6">
          <Line
            data={this.state.chartTopFiveSearchSuicide}
            options={{
              maintainAspectRatio: false
            }}>
          </Line>
        </div>
      </>
    );
  }
}

async function consultaPalavra() {
  
};