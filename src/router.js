//importaçao
import { Router } from 'express';
import UserController from './app/controllers/UserController';
// metodo para forçar usando este import.
//import User from './app/models/User';

//const { Router } = require('express'); nao se usa

//estanciar o router e depois fizemos 
const routes = new Router();

routes.post('/users', UserController.store)


//vamos testar com tunderclient

//tratar as rotas para o nosso app vamos invocar o router e dentro dele vamos por o parametro,passando por uma arrow function e temos uma requesiçao e uma resposta pelo res.
// é um exemplo
//routes.get('/', async (req, res) => {
//const user = await User.create({
    
  //      name: 'Rita Lopes',
    //    email: 'ritalopes33@gmail.com',
      //  password_hash: '1234567890',
    
//});
//return res.json(user)

    //return res.json({message: 'Okay'})
//})

//exportar o router para consumir ele no 

export default routes;
