import React from 'react';

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <span>{title}</span>
      <button onClick={onToggle}>{completed ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
