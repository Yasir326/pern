import { Request, Response } from 'express';
import { getUsers, getUserById, createUser } from '../services/users-service';
import { QueryResult } from 'pg';

export const fetchUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users: QueryResult = await getUsers();
    console.log(users.rows);
    return res.status(200).json(users.rows);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};

export const fetchUsersById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const user: QueryResult = await getUserById(id);
    console.log(user);
    return res.status(200).json(user.rows);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};

export const createNewUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { firstName, lastName, email } = req.body;

    if (!firstName && !lastName && !email) {
      return res.status(400).json('Invalid Request');
    }

    if (!validEmail(email)) {
      res.status(400).json('Invalid email address');
    }

    const user: QueryResult = await createUser(firstName, lastName, email);
    console.log(user);
    return res.status(200).json({
      message: 'User created successfully',
      body: {
        user: {
          firstName,
          lastName,
          email
        }
      }
    });
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};

const validEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
