import palavraList from '../palavra/Palavra.json'

class PalavraController {

    async index(request, response) {
        console.log('olá')
        return response.status(200).json(palavraList.palavra);
    }
    
}
export default new PalavraController();