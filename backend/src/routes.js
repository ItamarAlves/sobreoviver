import { Router } from 'express';
import PersonaController  from './app/controllers/PersonaController';

const routes = new Router();

routes.get('/', (request, response) => {
  console.log("A vida é Bela.")
  return response.json({message: "Sem Bem Vindo!."});
});

//Persona
routes.get('/persona', PersonaController.index);
routes.post('/persona', PersonaController.store);

export default routes;
