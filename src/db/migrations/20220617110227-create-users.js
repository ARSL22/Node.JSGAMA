'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users',{
      id: { //criamos um objecto
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
      },//users
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique:true,

        },
        password_hash: {  
          type: Sequelize.STRING,
          allowNull: false,
        },
        provider: {
          type:Sequelize.BOOLEAN,
           defaultValue: false,
           allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updated_at:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: new Date(),
        }    
          })
      
  },

  async down (queryInterface) {
    return queryInterface.dropTable( 'users')
  }
};
