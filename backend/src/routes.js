import { Router } from 'express';
import DashboardController  from './app/controllers/DashboardController';

const routes = new Router();

routes.get('/', (request, response) => {
  console.log("A vida é Bela.")
  return response.json({message: "Sem Bem Vindo!."});
});

//Persona
routes.get('/dashboard', DashboardController.index);
routes.post('/dashboard', DashboardController.store);

export default routes;
