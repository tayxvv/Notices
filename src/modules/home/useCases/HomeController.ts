import { Request, Response } from "express";
import axios from "axios";
import { Connection } from "../../../shared/infra/database/Connection";

class HomeController {

    async handle(request: Request, response: Response) {
        const connection = new Connection();
        const result = await connection.query('SELECT version();');
        return response.status(201).json({ "Message" : result });
    }
    
}

export { HomeController };