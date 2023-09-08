import dotenv from 'dotenv';
import { resolve } from 'path';
// carrega variaveis de ambientes
dotenv.config();
// importa  index com databaseConfig
import './database';
import express from 'express';
// importa rotas
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
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
