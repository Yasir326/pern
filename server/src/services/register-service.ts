import { client } from '../database';

export const register = async (email: string, hash: string) => {
  return await client.query('INSERT into login (email, hash) VALUES($1, $2)', [
    email,
    hash
  ]);
};

export const getRegisteredUsers = async () => {
  return await client.query('SELECT * FROM login')
}
