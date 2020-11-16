import googleTrends from 'google-trends-api';
import palavraList from '../palavra/Palavra.json'

class DashboardController {

    async comparePalavra(request, response) {
        const palavra = request.query.palavra;

        if (palavra != null) {

            const parameters = { keyword: palavra, geo: 'BR', resolution: 'region', hl: "pt-br" }

            googleTrends.interestByRegion(parameters, function (err, results) {
                if (!err) {
                    var dataResponse = results.toString();
                    dataResponse = JSON.parse(dataResponse);
                    const dataRes = {
                        "labels": [],
                        "data": []
                    };
                    
                    for (var p = 0; p < parameters.keyword.length; p++) {
                        dataRes.labels.push(parameters.keyword[p]);
                        for (var i = 0; i < dataResponse.default.geoMapData.length; i++) {
                            for (var y = 0; y < dataResponse.default.geoMapData[i].value.length; y++) {
                                console.log(dataRes.data.length);
                                dataRes.data.push(dataRes.data.length > 0 ? dataRes.data[p] : 0 + dataResponse.default.geoMapData[i].value[p]);
                            }
                        }
                    }
                    return response.status(200).json(dataRes);
                } else {
                    return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
                };

            });

        } else {
            console.log(palavraList.palavra)
            for (var i = 0; i < palavraList.palavra.length; i++) {
                const parameters = { keyword: palavraList.palavra[i] }
                result = consultApi(response, parameters);

            }

            return null;
        }

    }

    async pesquisaRegiao(request, response) {

    }

    async pesquisaEstado(request, response) {

    }
}

async function consultApi(response, parameters) {
    googleTrends.interestByRegion(parameters, function (err, results) {
        if (!err) {
            var dataResponse = results.toString();
            dataResponse = JSON.parse(dataResponse);

            return response.status(200).json(dataResponse);
        } else {
            return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza." });
        };

    });
}


export default new DashboardController();