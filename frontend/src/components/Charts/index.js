import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import './index.css';
import api from '../../services/api';

export default class Charts extends Component {

  state = {
    chartComparationSearch: {},
    chartCasesSuicidesRegion: {},
    chartTopFiveSearchSuicide: {},
  }

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const palavra = urlParams.get('palavra');

    if (palavra != null) {
      if (palavra.indexOf(",") != -1) {
        var palavraCompara;
        var palavraArrayTemp = palavra.split(",");
        var size = palavraArrayTemp.length - 1;
        for (var a = 0; a < palavraArrayTemp.length; a++) {
          var pal;
          if (a == 0) {
            var pal = palavraArrayTemp[a];
            pal += "&";
          } else {
            pal += "palavra=";
            pal += palavraArrayTemp[a];
            if (a != size) {
              pal += "&";
            } else {
              palavraCompara = pal;
            }
          }
        }
      } else {
        palavraCompara = palavra;
      }
    }

    //consultar endpoint /compare-palavra
    const dataResComPal = await api.get('/dashboard/compare-palavra?palavra=' + palavraCompara);
    this.setState({ chartComparationSearch: dataResComPal.data });

    //consultar endpoint /pesquisa/regiao
    const dataResPesReg = await api.get('/dashboard/pesquisa/regiao?palavra=' + palavra);
    this.setState({ chartCasesSuicidesRegion: dataResPesReg.data });

    //consultar endpoint /pesquisa/regiao-estado
    const dataResPesEst = await api.get('/dashboard/pesquisa/regiao-estado?palavra=' + palavra + '&top=5');
    this.setState({ chartTopFiveSearchSuicide: dataResPesEst.data });
  }

  constructor(props) {
    super(props);
  }

  render() {

    const { chartComparationSearch, chartCasesSuicidesRegion, chartTopFiveSearchSuicide } = this.state;

    return (
      <>
        <div className="chart col-sm-12">
          <Bar
            data={
              {
                labels: chartComparationSearch.labels,
                datasets: [{
                  label: 'Comparativo dos Termos Pesquisados',
                  data: chartComparationSearch.data,
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
              }
            }
            options={{
              maintainAspectRatio: false
            }}>
          </Bar>
        </div>

        <div className="chart col-sm-6">
          <Line
            data={
              {
                labels: chartCasesSuicidesRegion.labels,
                datasets: [{
                  label: 'Quantidade dos Termo(s) Pesquisado(s) Por Regiões No Brasil',
                  data: chartCasesSuicidesRegion.data,
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
              }
            }
            options={{
              maintainAspectRatio: false
            }}>
          </Line>
        </div>
        <div className="chart col-sm-6">
          <Line
            data={
              {
                labels: chartTopFiveSearchSuicide.labels,
                datasets: [{
                  label: '5 Estados com Maiores Pesquisas Relacionadas aos Termo(s) Pesquisado(s) no Brasil',
                  data: chartTopFiveSearchSuicide.data,
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
              }
            }
            options={{
              maintainAspectRatio: false
            }}>
          </Line>
        </div>
      </>
    );
  }
}