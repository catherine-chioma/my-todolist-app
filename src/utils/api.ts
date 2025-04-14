// src/utils/api.ts

export type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };
  
  const API_URL = '/api/todos'; // Use relative path for Next.js API routes
  
  // Fetch all todos
  export const getTodos = async (): Promise<Todo[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch todos');
    return res.json();
  };
  
  // Create a new todo
  export const createTodo = async (todo: Omit<Todo, 'id'>): Promise<Todo> => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error('Failed to create todo');
    return res.json();
  };
  
  // Update an existing todo
  export const updateTodo = async (id: number, updatedFields: Partial<Todo>): Promise<Todo> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields),
    });
    if (!res.ok) throw new Error('Failed to update todo');
    return res.json();
  };
  
  // Delete a todo
  export const deleteTodo = async (id: number): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete todo');
  };
  