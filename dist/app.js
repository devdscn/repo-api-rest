"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
// carrega variaveis de ambientes
_dotenv2.default.config();
// importa  index com databaseConfig
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
// importa rotas
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, '/images/', __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/api/', _homeRoutes2.default);
    this.app.use('/api/users/', _userRoutes2.default);
    this.app.use('/api/alunos/', _alunoRoutes2.default);
    this.app.use('/api/tokens/', _tokenRoutes2.default);
    this.app.use('/api/fotos/', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
