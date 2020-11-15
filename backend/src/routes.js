import { Router } from 'express';
import DashboardController  from './app/controllers/DashboardController';
import PalavraController  from './app/controllers/PalavraController';

const routes = new Router();

routes.get('/', (request, response) => {
  console.log("A vida é Bela.")
  return response.json({message: "Sem Bem Vindo!."});
});

//Dashboard
routes.get('/dashboard', DashboardController.index);
routes.post('/dashboard', DashboardController.store);

routes.get('/palavra', PalavraController.index);

export default routes;
