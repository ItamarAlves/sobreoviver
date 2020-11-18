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
    // 
    this.state = {
      chartComparationSearch: {
        labels: ['Suicídio', 'como se suicidar', 'automutilação', 'morte certa', 'remédios para se matar', 'músicas de suícidio'],
        datasets: [{
          label: 'Comparativo dos Termos Pesquisados',
          data: [1500, 1250, 1000, 1325, 1000, 1243, 947],
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
      

      chartCasesSuicidesRegion: {
        labels: ['Norte', 'Nordeste', 'Centro Oeste', 'Sul', 'Sudeste'],
        datasets: [{
          label: 'Quantidade dos Termo(s) Pesquisado(s) Por Regiões No Brasil',
          data: [30546, 25733, 22136, 27849, 26354],
          backgroundColor: [
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
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },


      chartTopFiveSearchSuicide: {
        labels: ['Rondônia', 'São Paulo', 'Rio de Janeiro', 'Mato Grosso', 'Amazonas'],
        datasets: [{
          label: '5 Estados com Maiores Pesquisas Relacionadas aos Termo(s) Pesquisado(s) no Brasil',
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