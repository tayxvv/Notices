import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, email, password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);

        try {
            await createUserUseCase.execute({ username, email, password });

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }
    }

}

export { CreateUserController };