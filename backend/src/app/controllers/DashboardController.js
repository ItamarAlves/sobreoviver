import googleTrends from 'google-trends-api';
import palavraList from '../palavra/Palavra.json'
import regiaoList from '../regiao/Regiao.json'

class DashboardController {

    async comparePalavra(request, response) {
        const palavraArray = {
            "palavra": []
        }

        const palavra = request.query.palavra;

        if (palavra != null && palavra != '') {
            palavraArray.palavra.push(palavra)
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

                // for (var x = 0; x < dataRes.data.length; x++) {
                //     var percPalavra = Math.round((dataRes.data[x] / valueTotal) * 100, 2);
                //     dataRes.data[x] = percPalavra;
                // }

                return response.status(200).json(dataResponse);
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
                    dataRes.data.push(dataResponse.default.geoMapData[i].value)
                }

                return response.status(200).json(dataRes);
            } else {
                return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
            };
        });

    }
}

export default new DashboardController();