import { Router } from 'express';
import DashboardController  from './app/controllers/DashboardController';
import PalavraController  from './app/controllers/PalavraController';

const routes = new Router();

routes.get('/', (request, response) => {
  console.log("A vida é Bela.")
  return response.json({message: "Sem Bem Vindo!."});
});

//Dashboard
routes.get('/sobreoviver/dashboard/compare-palavra', DashboardController.comparePalavra);
routes.get('/sobreoviver/dashboard/pesquisa/regiao', DashboardController.pesquisaRegiao);
routes.get('/sobreoviver/dashboard/pesquisa/regiao-estado', DashboardController.pesquisaEstado);

//Palavras
routes.get('/sobreoviver/palavra', PalavraController.index);

export default routes;
