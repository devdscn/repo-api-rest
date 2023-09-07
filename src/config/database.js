require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Bahia',

    /*
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast(field, next) { // for reading from database
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    }, */

  },

  timezone: 'America/Bahia',
};
