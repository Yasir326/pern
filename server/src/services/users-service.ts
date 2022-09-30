import { client } from '../database';

export const getUsers = async () => {
  return await client.query('SELECT * FROM users');
};

export const getUserById = async (id: number) => {
  return await client.query('SELECT * FROM users WHERE id = $1', [id]);
};

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string
) => {
  return await client.query(
    'INSERT INTO users (first_name, last_name, email) VALUES($1, $2, $3)',
    [firstName, lastName, email]
  );
};
