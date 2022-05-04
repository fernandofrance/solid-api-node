import { CreateUserController } from './CreateUserController';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepository = new UsersRepository()

const createUserUseCase = new CreateUserUseCase(usersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }