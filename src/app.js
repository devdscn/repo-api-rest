import dotenv from 'dotenv';
import { resolve } from 'path';
// carrega variaveis de ambientes
dotenv.config();
// importa  index com databaseConfig
import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import delay from 'express-delay';
// importa rotas
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = [
  'http://localhost:3001',
  'https://api.mdecomerce.cloud',
  'https://www.mdecomerce.cloud',
];
const corsOption = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) === -1 || origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOption));
    this.app.use(helmet());
    this.app.use(delay(200));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      '/images/',
      (req, res, next) => {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        next();
      },
      express.static(resolve(__dirname, '..', 'uploads', 'images'))
    );
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
