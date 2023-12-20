import { Router } from 'express';
import { homeRoutes } from './home.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticateUser.routes';

const router = Router();

router.use("/home", homeRoutes);
router.use("/registerLogin", usersRoutes);
router.use("/login", authenticateRoutes);

export { router };