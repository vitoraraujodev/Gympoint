import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/students', authMiddleware, StudentController.store);

routes.post('/plans', authMiddleware, PlanController.store);
routes.get('/plans', authMiddleware, PlanController.index);

export default routes;
