import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import superheroiController from './controller/superheroiController.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(superheroiController);

server.listen(process.env.PORT, 
             () => console.log(`API conectada na porta ${process.env.PORT}`));