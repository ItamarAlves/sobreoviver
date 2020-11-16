import googleTrends from 'google-trends-api';
import palavraList from '../palavra/Palavra.json'

class DashboardController {

    async index(request, response) {
        const palavra = request.query.palavra;
        
        if (palavra != null) {
        
            const parameters = { keyword: request.query.palavra, geo:'BR', resolution:'region', hl:"pt-br"}
            
            return consultApi(response, parameters);
            
        } else {
            console.log(palavraList.palavra)
            for (var i = 0; i < palavraList.palavra.length; i++) {
                const parameters = { keyword: palavraList.palavra[i]}
                result = consultApi(response, parameters);

            }

            return null;
        }

    }

    async store(request, response) {

    }
}

function consultApi(response, parameters) {
    googleTrends.interestByRegion(parameters, function (err, results) {
        if (!err){
            var dataResponse =  results.toString();
            dataResponse = JSON.parse(dataResponse);

            return response.status(200).json(dataResponse);
        } else {
            return response.status(500).json({ "error": "Tente efetuar a solicitação novamente em alguns minutos, por gentileza."});
        };
        
    });
}


export default new DashboardController();