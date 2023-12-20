import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../infra/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { hash } from 'bcrypt';
@injectable()
class CreateUserUseCase {
    
    constructor(
        @inject('UsersRepository')
        private userRepository: IUserRepository
    ) {}
    async execute({ username, email, password }: ICreateUserDTO): Promise<User> {
        const userAlreadyExists = await this.userRepository.findByUserName(username);
        if (userAlreadyExists[0]) {
            throw new AppError("User already exists!");
        }
        const user = await this.userRepository.create({
            username,
            email,
            password: await hash(password, 8)
        });
        return user;
    }
}
export { CreateUserUseCase };