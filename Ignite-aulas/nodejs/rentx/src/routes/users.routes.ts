import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';

const usersRouter = Router();

const createUserUseCase = new CreateUserController();

usersRouter.post('/', createUserUseCase.handle);

export { usersRouter };
