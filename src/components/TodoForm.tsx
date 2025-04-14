import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trim the title to remove spaces before and after
    if (title.trim() === '') {
      setError('Todo title cannot be empty.');
      return; // Prevent form submission
    }
    
    // Clear error if validation passes
    setError('');
    
    // Add the todo
    onAddTodo(title);
    setTitle(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Todo"
        required
      />
      <button type="submit">Add Todo</button>
      
      {/* Display error message if title is empty */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default TodoForm;

