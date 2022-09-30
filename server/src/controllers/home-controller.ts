import { Request, Response } from 'express';
import * as service from '../services/home-service';

export const getHome = async (req: Request, res: Response) => {
    return res.send(service.goHome());
};

