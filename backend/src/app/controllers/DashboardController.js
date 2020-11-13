import googleTrends from 'google-trends-api';
import palavraList from '../palavra/Palavra.json'

class DashboardController {

    async index(request, response) {
        const palavra = request.query.pesquisa;
        
        if (palavra != null) {
            const pesquisa = { keyword: request.query.pesquisa }
            
            return consultarApi(response, pesquisa);
            
        } else {
            console.log(palavraList.palavra)
            for (var i = 0; i < palavraList.palavra.length; i++) {
                const pesquisa = { keyword: palavraList.palavra[i]}
                result = consultarApi(response, pesquisa);

            }

            return null;
        }

    }

    async store(request, response) {

    }
}

function consultarApi(response, pesquisa) {
    googleTrends.interestOverTime(pesquisa, function (err, results) {
        if (!err){
            // console.log('resultados', results);
            return response.status(200).json({ "result": results});
        } else {
            console.error('Deu erro', err)
            return response.status(500).json({ "error": "Tente novamente"});
        };
        
    });
}


export default new DashboardController();