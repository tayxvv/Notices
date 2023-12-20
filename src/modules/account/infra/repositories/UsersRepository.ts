import { IDatabase } from 'pg-promise';
import { User } from '../entities/User';
import { IUserRepository } from '../../repositories/IUserRepository';
import { ICreateUserDTO } from '../../dto/ICreateUserDTO';
import { Connection } from '../../../../shared/infra/database/Connection';


class UsersRepository implements IUserRepository{

    connection: any;

    constructor() {
        this.connection = new Connection();
    }

    async create({ username, email, password }: ICreateUserDTO): Promise<User> {
        const user = new User(username, email, password);
    
        // Execute a consulta SQL usando o método none do pgPromise
        await this.connection.query('INSERT INTO users(username, email, password_hash) VALUES(${username}, ${email}, ${password_hash})', {
            username: user.username,
            email: user.email,
            password_hash: user.password_hash // Certifique-se de passar o valor correto aqui
        });
    
        return user;
    }

    async findByUserName(username: string):Promise<User> {
        const user = await this.connection.query('SELECT * FROM users WHERE username = ${username}', {
            username
        });

        return user[0];
    }
}

export { UsersRepository };