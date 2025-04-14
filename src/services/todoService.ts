import { DataSource } from 'typeorm';
import { Todo } from '../entities/todo.entity';

import AppDataSource from '../config/data-source'; // adjust the path if needed

const todoRepository = AppDataSource.getRepository(Todo);

export class TodoService {
  static async create(title: string, description?: string, dueDate?: Date) {
    const todo = todoRepository.create({
      title,
      description,
      dueDate,
      completed: false,
    });

    await todoRepository.save(todo);
    return todo;
  }

  static async getAll() {
    return await todoRepository.find();
  }

  static async getById(id: number) {
    const todo = await todoRepository.findOne({
      where: { id },
    });

    if (!todo) {
      throw new Error('Todo not found');
    }

    return todo;
  }

  static async update(id: number, updates: Partial<Todo>) {
    const todo = await todoRepository.findOne({
      where: { id },
    });

    if (!todo) {
      throw new Error('Todo not found');
    }

    Object.assign(todo, updates);
    await todoRepository.save(todo);

    return todo;
  }

  static async delete(id: number) {
    const todo = await todoRepository.findOne({
      where: { id },
    });

    if (!todo) {
      throw new Error('Todo not found');
    }

    await todoRepository.remove(todo);
  }
}

