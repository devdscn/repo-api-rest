"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 55],
              msg: 'Nome pŕecisar ter de 3 a 50 caracteres.',
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro.',
            },
          },
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          validate: {
            isFloat: {
              msg: 'Peso precisar ser número inteiro ou flutuante.',
            },
          },
        },
        altura: {
          type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
