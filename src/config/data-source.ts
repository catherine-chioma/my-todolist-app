import { DataSource } from 'typeorm';
import { Todo } from '../entities/todo.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_db',
  synchronize: true,
  logging: false,
  entities: [Todo],
});

export default AppDataSource;
