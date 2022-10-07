import { Request, Response } from 'express';
import {
  getAll,
  getById,
  create,
  deleteQuery,
  update
} from '../services/users-service';
import {validEmail } from '../common';
import { QueryResult } from 'pg';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users: QueryResult = await getAll();
    console.log(users.rows);
    return res.status(200).json(users.rows);
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};

export const getUsersById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const user: QueryResult = await getById(id);
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
      return res.status(400).json('Invalid email address');
    }

    await create(firstName, lastName, email);

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
    if (e.code == '23505') {
      console.error(e.message);
      return res.status(400).json('Email address already exists');
    }
    return res.status(500).json('Internal Server Error');
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      return res.status(400).json('Need to pass in a valid id');
    }

    const response: QueryResult = await deleteQuery(id);
    return res.status(203).json('User successfully deleted');
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = parseInt(req.params.id);
    const { firstName, lastName, email } = req.body;
    await update(id, firstName, lastName, email);
    return res.status(201).json('User successfully updated');
  } catch (e: any) {
    console.error(e);
    return res.status(500).json('Internal Server Error');
  }
};
