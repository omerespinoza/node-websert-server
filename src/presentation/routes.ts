import { Router } from 'express';
import { TodosController } from './todos/controller';
import { TodoRoutes } from './todos/routes';

export class AppRoutes {

    public static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();
        router.use('/api/todos', TodoRoutes.routes);
        return router;
    };

};