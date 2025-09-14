import { Router } from 'express';
import { TodosController } from '../todos/controller';

export class TodoRoutes {

    public static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();

        router.get('/', todoController.getAllTodos);
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.createTodo);
        router.put('/:id', todoController.updateTodo);
        router.delete('/:id', todoController.deteleTodo);

        return router;
    };

};