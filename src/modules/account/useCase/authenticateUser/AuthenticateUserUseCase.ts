import { Response } from "express";
import { UsersRepository } from "../../infra/repositories/UsersRepository";
import { IUserRepository } from "../../repositories/IUserRepository";
import { Connection } from "../../../../shared/infra/database/Connection";
import { User } from "../../infra/entities/User";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import auth from '../../../../config/auth'

interface IResponse {
    username: string;
    password: string;
    token: string;
}

@injectable()
class AuthenticateUserUseCase {

    connection: Connection;

    constructor(
        @inject('UsersRepository')
        private userRepository: IUserRepository
    ) {
    }

    async execute(username: string, password: string): Promise<String> {

        const user = await this.userRepository.findByUserName(username);
        const userId = user.id;

        if (!user) {
            throw new AppError("Username or password wrong", 401);
        }

        const passwordMatch = await compare(password, user.password_hash);

        //console.log(user);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect", 401);
        }

        const token = sign({ userId }, auth.secret_token, { expiresIn: '1h' });

        return token;
    }
}

export { AuthenticateUserUseCase };