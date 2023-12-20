import 'reflect-metadata';
import "../../container";
import express from 'express';
import { router } from './routes';
require('dotenv/config');
const app = express();

// Middleware para configurar CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use(express.json());

app.use(router);

//app.listen(3333, () => console.log("Server is runningg"));

export { app };