import { container } from "tsyringe";
import { IUserRepository } from "../../modules/account/repositories/IUserRepository";
import { UsersRepository } from "../../modules/account/infra/repositories/UsersRepository";

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UsersRepository
)