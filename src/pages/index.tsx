import { useEffect, useState } from 'react';
import TodoItem from '../components/TodoItem'; // Import your TodoItem component
import TodoForm from '../components/TodoForm'; // Import your TodoForm component
import { getTodos, createTodo, updateTodo, deleteTodo, Todo } from '../utils/api';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch the list of todos from the backend when the component mounts
  useEffect(() => {
    const fetchTodos = async () => {
      const fetchedTodos = await getTodos();
      setTodos(fetchedTodos);
    };
    fetchTodos();
  }, []);

  // Function to add a new todo
  const addTodo = async (title: string) => {
    const newTodo = await createTodo({ title, completed: false }); // Pass title and completed as false
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = async (id: number) => {
    const updatedTodo = await updateTodo(id, { completed: true });
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  // Function to delete a todo
  const deleteTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoForm onAddTodo={addTodo} /> {/* Render the TodoForm component */}
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={() => toggleTodo(todo.id)} // Function to toggle todo completion
            onDelete={() => deleteTodo(todo.id)} // Function to delete todo
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
