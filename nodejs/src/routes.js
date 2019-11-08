import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/students', authMiddleware, StudentController.store);
routes.put('/students/:id', authMiddleware, StudentController.update);

routes.get('/plans', authMiddleware, PlanController.index);
routes.post('/plans', authMiddleware, PlanController.store);
routes.put('/plans/:id', authMiddleware, PlanController.update);
routes.delete('/plans/:id', authMiddleware, PlanController.delete);

routes.get('/registrations', authMiddleware, RegistrationController.index);
routes.post('/registrations', authMiddleware, RegistrationController.store);

export default routes;
