import googleTrends from 'google-trends-api';
import palavraList from '../palavra/Palavra.json'
import regiaoList from '../regiao/Regiao.json'
import regiaoEstadoList from '../regiao/RegiaoEstado.json'

class DashboardController {

    async comparePalavra(request, response) {
        const palavraArray = {
            "palavra": []
        }

        const palavra = request.query.palavra;

        if(typeof palavra === 'string') {
            return response.json({"message": "Para comparar, Você deve nos enviar mais de uma palavra!"});
        }

        if (palavra[0] != null && palavra[0] != '') {
            if (palavra.length > 1) {
                for (var t = 0; t < palavra.length; t++) {
                    palavraArray.palavra.push(palavra[t]);
                }
            } else {
                palavraArray.palavra.push(palavra[0]);
            }
        } else {
            for (var i = 0; i < palavraList.palavra.length; i++) {
                palavraArray.palavra.push(palavraList.palavra[i]);
            }
        }

        const parameters = { keyword: palavraArray.palavra, geo: 'BR', resolution: 'region', hl: "pt-br" }

        await googleTrends.interestByRegion(parameters, function (err, results) {
            if (!err) {
                var dataResponse = results.toString();
                dataResponse = JSON.parse(dataResponse);
                const dataRes = {
                    "labels": [],
                    "data": []
                };

                var valueTotal = 0;
                for (var p = 0; p < parameters.keyword.length; p++) {
                    var value = 0;
                    dataRes.labels.push(parameters.keyword[p]);
                    for (var i = 0; i < dataResponse.default.geoMapData.length; i++) {
                        for (var y = 0; y < dataResponse.default.geoMapData[i].value.length; y++) {
                            if (y != p) continue;
                            value += dataResponse.default.geoMapData[i].value[p];
                        }
                    }
                    valueTotal += value;
                    dataRes.data.push(value);
                }

                for (var x = 0; x < dataRes.data.length; x++) {
                    var percPalavra = Math.round((dataRes.data[x] / valueTotal) * 100, 2);
                    dataRes.data[x] = percPalavra;
                }

                return response.status(200).json(dataRes);
            } else {
                return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
            };

        });
    }

    async pesquisaRegiao(request, response) {
        const palavra = request.query.palavra;
        const parameters = { keyword: palavra, geo: 'BR', resolution: 'region', hl: "pt-br" }

        await googleTrends.interestByRegion(parameters, function (err, results) {
            if (!err) {
                var dataResponse = results.toString();
                dataResponse = JSON.parse(dataResponse);
                const dataRes = {
                    "labels": [],
                    "data": []
                };

                var valueTotal = 0;
                for (var t = 0; t < regiaoList.regiao.length; t++) {
                    var regiao = regiaoList.regiao[t];
                    dataRes.labels.push(regiao);

                    var value = 0
                    for (var i = 0; i < regiaoEstadoList[regiao].length; i++) {
                        var estado = regiaoEstadoList[regiao][i];
                        for (var y = 0; y < dataResponse.default.geoMapData.length; y++) {
                            if (dataResponse.default.geoMapData[y].geoName == estado) {
                                value += dataResponse.default.geoMapData[y].value[0];
                            };
                        }
                    }
                    valueTotal += value;
                    dataRes.data.push(value)
                }

                for (var x = 0; x < dataRes.data.length; x++) {
                    var percRegiao = Math.round((dataRes.data[x] / valueTotal) * 100, 2);
                    dataRes.data[x] = percRegiao;
                }

                return response.status(200).json(dataRes);
            } else {
                return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
            };
        });
    }

    async pesquisaEstado(request, response) {
        const palavra = request.query.palavra;
        const top = request.query.top;
        const parameters = { keyword: palavra, geo: 'BR', resolution: 'region', hl: "pt-br" }

        await googleTrends.interestByRegion(parameters, function (err, results) {
            if (!err) {
                var dataResponse = results.toString();
                dataResponse = JSON.parse(dataResponse);
                const dataRes = {
                    "labels": [],
                    "data": []
                };

                for (var i = 0; i < top; i++) {
                    dataRes.labels.push(dataResponse.default.geoMapData[i].geoName);
                    for (var y = 0; y < dataResponse.default.geoMapData[i].value.length; y++) {
                        dataRes.data.push(dataResponse.default.geoMapData[i].value[y]);
                    }
                }

                return response.status(200).json(dataRes);
            } else {
                return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
            };
        });
    }
}

export default new DashboardController();