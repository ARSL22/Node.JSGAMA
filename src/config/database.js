
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'system',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll:  true,
    },
    //sslmode: "required",
    //dialectOptions: {
      //ssl: {
        //rejectUnauthorized: false,
      //},
    //},
}

