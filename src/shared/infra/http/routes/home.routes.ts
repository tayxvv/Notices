import { Router } from "express";

import { Request, Response } from "express";
import { HomeController } from "../../../../modules/home/useCases/HomeController";

const homeRoutes = Router();

const listHomeController = new HomeController();

homeRoutes.get("/", listHomeController.handle);

export { homeRoutes };