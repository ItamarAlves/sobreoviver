import Persona from '../models/Persona';

class PersonaController {

    async index(request, response) {
        const personas = await Persona.findAll();

        return response.json(personas);
    }
    async store(request, response) {
        console.log(request.body);

        const { pes_name, pes_email, pes_passwordhash, pes_birth, pes_phone}  = request.body;

        const personas = await Persona.create({
            pes_name,
            pes_email,
            pes_passwordhash,
            pes_birth,
            pes_phone,
            });
            
        return response.json({ personas });
    }
}

export default new PersonaController();