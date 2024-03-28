const mysql = require('mysql2');

/**
 * HOST, PORT, DATABASE, USER, PASSWORD
 */
const stringConexao = {
    host: '127.0.0.1',
    port: '3306',
    database: 'DB_ETEC',
    user: 'root',
    password: 'prof@etec'
}

const connection = mysql.createConnection(stringConexao);

connection.connect(function(error){
    console.log(stringConexao)
    if(error){
        console.log('Falha ao iniciar conexão com o banco de dados' + error.stack);
    }else{
        console.log('Conexão realizada com sucesso');
    }
})


module.exports = connection;







