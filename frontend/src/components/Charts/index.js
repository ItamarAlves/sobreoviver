import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './index.css';

export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartComparationSearch:{
        labels: ['Termo 1', 'Termo 2', 'Termo 3', 'Termo 4', 'Termo 5', 'Termo 6', 'Termo 7'],
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

