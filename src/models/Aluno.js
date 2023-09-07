import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 55],
              msg: 'Nome pŕecisar ter de 3 a 50 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 50],
              msg: 'Nome pŕecisar ter de 3 a 50 caracteres.',
            },
          },
        },
        email:
        {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe.',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },
        idade:
        {
          type: Sequelize.INTEGER,
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro.',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          validate: {
            isFloat: {
              msg: 'Peso precisar ser número inteiro ou flutuante.',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          validate: {
            isFloat: {
              msg: 'Altura precisar ser número inteiro ou flutuante.',
            },
          },
        },
      },

      { sequelize },
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
