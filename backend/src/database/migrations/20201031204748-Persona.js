module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('personas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      pes_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pes_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      pes_passwordhash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pes_birth: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      pes_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('personas');
  }
};
