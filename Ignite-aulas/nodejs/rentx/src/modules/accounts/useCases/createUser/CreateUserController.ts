import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, driver_license, email, password } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({
        name,
        driver_license,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(409).json({ Error: error.message });
    }
  }
}

export { CreateUserController };
