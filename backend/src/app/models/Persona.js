import Sequelize, { Model, Sequelize } from 'sequelize';

class Persona extends Model {
    static init(sequelize) {
        super.init({
            pes_name: Sequelize.STRING,
            pes_email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            pes_passwordhash: Sequelize.STRING,
            pes_birth: Sequelize.DATE,
            pes_phone: Sequelize.STRING,
        },
        {
            sequelize,
        })
    }
}

export default Persona;
