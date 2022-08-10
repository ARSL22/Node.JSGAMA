
//Criamos App
//1- fizemos uma coonstante por causa do que isntalamos(express)
import express from 'express';
//const express = require('express');

//3-vamos criar uma constate chamada routes que vai receber do require e vai receber o router.
import routes from './router';
//const routes = require('./router');


//2-fizemos uma classe da app para receber o constructor
class App{
    constructor() { 
        this.server = express();
        this.middlewares();
        this.routes();
    }
    
    middlewares() { 
        this.server.use(express.json())
    }
    
    routes() {
        this.server.use(routes)

    }
}
//4-vamos passa para o construtor sem paramtros e onde fazemos uso da nossa aplicaçao.
//vamos criar dois metos: middlewares e routes
//dentro do construtor vamos invocar o server,middlewares e o routes.
//



export default  new App().server;

