module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'tcc-secret',
    database: 'sobreoviver',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };