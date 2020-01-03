import express from 'express';
import cors from 'cors';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    // Aqui coloca o endereço da aplicação React (cors({origin: 'https://...'}))
    this.server.use(cors());
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
