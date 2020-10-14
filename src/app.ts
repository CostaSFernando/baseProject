import express, { Request, Response } from 'express';
import usuarioRouter from './router/user';

const app = express();
app.use('/user', usuarioRouter);
// app.use(route);
// app.get('/', (request: Request, res: Response) => {
//     console.log('Great!');
//     res.send('Hello World');
// });

export = app;