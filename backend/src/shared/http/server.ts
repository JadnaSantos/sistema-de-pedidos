import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';
import { AppError } from '../errors/AppError';
import swaggerFile from "../swagger.json";
import swaggerUi from "swagger-ui-express";
import { routes } from './routes/routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);


app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')))

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  },
);


app.listen(3333, () => console.log('Server is running 🚀'));
