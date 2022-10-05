import { client } from '../database';

export const getAll = async () => {
  return await client.query('SELECT * FROM users');
};

export const getById = async (id: number) => {
  return await client.query('SELECT * FROM users WHERE id = $1', [id]);
};

export const create = async (
  firstName: string,
  lastName: string,
  email: string
) => {
  await client.query(
    'INSERT INTO users (first_name, last_name, email) VALUES($1, $2, $3)',
    [firstName, lastName, email]
  );
};

export const update = async (id: number, firstName: string,
  lastName: string,
  email: string) => {
    await client.query('UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4', [firstName, lastName, email, id])
  }

export const deleteQuery = async (id: number) => {
  return await client.query('DELETE FROM users WHERE id=$1', [id]);
};
