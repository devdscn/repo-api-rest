import dotenv from 'dotenv';
import { resolve } from 'path';
// carrega variaveis de ambientes
dotenv.config();
// importa  index com databaseConfig
import './database';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
// importa rotas
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList = ['http://localhost:3001/api', 'https://mdecomerce.cloud/api'];
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
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      '/images/',
      express.static(resolve(__dirname, '..', 'uploads', 'images')),
    );
  }

  routes() {
    this.app.use('/api/', homeRoutes);
    this.app.use('/api/users/', userRoutes);
    this.app.use('/api/alunos/', alunoRoutes);
    this.app.use('/api/tokens/', tokenRoutes);
    this.app.use('/api/fotos/', fotoRoutes);
  }
}

export default new App().app;
