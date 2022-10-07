import { Request, Response } from 'express';
import { register, getRegisteredUsers} from '../services/register-service';
import { QueryResult } from 'pg';
import * as bcrypt from 'bcrypt';
import { validEmail } from '../common';

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'incorrect form submission' });
    }
    if (!validEmail(email)) {
      return res.status(400).json('Invalid email address');
    }
    const hash = await bcrypt.hash(password, 10);
    const user: QueryResult = await register(email, hash);
    return res.status(200).json({
        message: 'User created successfully',
        body: {
          user: {
            email,
            hash
          }
        }
      });
  } catch (e: any) {
    console.error(e);
    if (e.code == '23505') {
      console.error(e.message);
      return res.status(400).json('Email address already exists');
    }
    return res.status(500).json('Internal Server Error');
  }
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users: QueryResult = await getRegisteredUsers();
        console.log(users.rows);
        return res.status(200).json(users.rows);
      } catch (e: any) {
        console.error(e);
        return res.status(400).json('Could not get users');
      }
}
