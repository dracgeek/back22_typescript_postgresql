import { Request, Response } from 'express';
import { pool } from '../db/db';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await
            pool.query('SELECT * FROM users ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
    return res.json('Usuario registrado!')
};

export const updateUser = async (req: Request, res: Response) => {
   
    return res.json('Usuario actualziado!');
};

export const deleteUser = async (req: Request, res: Response) => {
   
    return res.json(`Userario  eliminado!`);
};