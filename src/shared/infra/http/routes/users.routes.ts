import { Router } from "express";

import { Request, Response } from "express";
import { CreateUserController } from "../../../../modules/account/useCase/createUser/CreateUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };