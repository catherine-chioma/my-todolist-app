// src/database/connection.ts
import { createConnection } from 'typeorm';

export const connectDatabase = async () => {
  try {
    await createConnection();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
