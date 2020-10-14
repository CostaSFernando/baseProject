import { Request, Response, Router } from 'express';
const usuarioRouter = () =>  {
    return Router()
    .get('/', (req: Request, res: Response) => {
        console.log('great access!')
        res.send('Hello World');
    })
}
export default usuarioRouter();