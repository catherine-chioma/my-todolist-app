// src/pages/api/todos.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, title: 'Learn Next.js', completed: false },
  { id: 2, title: 'Build a ToDo App', completed: true },
];

// Handle GET, POST, PUT, DELETE
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(todos);  // Return all todos
  } else if (req.method === 'POST') {
    const newTodo: Todo = req.body;
    newTodo.id = Date.now(); // Assign a new ID based on the current timestamp (in place of a DB)
    todos.push(newTodo);
    res.status(201).json(newTodo); // Return the created todo
  } else if (req.method === 'PUT') {
    const { id } = req.query;
    const updatedTodo: Partial<Todo> = req.body;

    todos = todos.map((todo) =>
      todo.id === Number(id) ? { ...todo, ...updatedTodo } : todo
    );

    res.status(200).json(todos.find((todo) => todo.id === Number(id)));
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    todos = todos.filter((todo) => todo.id !== Number(id));
    res.status(204).end();  // No content
  } else {
    res.status(405).end();  // Method Not Allowed
  }
}

