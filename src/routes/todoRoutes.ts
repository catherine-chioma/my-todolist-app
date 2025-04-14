import { Router } from 'express';
import { getTodos, createTodo } from '../controllers/todoController'; // Correct relative path


const router = Router();

// Route to get all todos
router.get('/', getTodos);

// Route to create a new todo
router.post('/', createTodo);

export default router;

