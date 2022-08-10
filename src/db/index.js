import Sequelize from 'sequelize';
import User from "../app/models/User";
import databaseConfig from '../config/database.js';

//models que vai receber um arrya que vai ter o user

const models = [User]; 

// fazer uma class database que vai receber o metodo construtor que inicialmente vai passar ocmo atributo o this.init da nossa class

class Database {
    constructor(){
        this.init();
    }

    //connection é o parametro
init(){
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection))
}
}
export default  new Database();