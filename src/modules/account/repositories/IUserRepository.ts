import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../infra/entities/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<User>;
    findByUserName(email: string): Promise<User>;
}

export { IUserRepository };