import Sequelize from 'sequelize';

import Persona from '../app/models/Persona';
import dbConfig from '../config/database';

const models = [Persona];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection));    

  }
}

export default new Database();