const express = require('express');
const mysql = require('./db/mysqldb')

const server = express();

const ip = '127.0.0.1';
const porta = '8080';

server.listen(porta, ip, function(){
    console.log('Servidor executando');
} );

//ROTA GET
server.get('/', function(req, res){
    return res.send('Rota padrão funcional');
});

//ROTA LISTAR USUÁRIOS
server.get('/listar-usuarios', function(req, res){

    mysql.query('SELECT * FROM USUARIOS', function(error, result){
        if(error){
            console.log('Erro ao consultar usuários')
            return res.status(500).json(error.stack)
        }else{
            console.log(result);
            return res.status(200).json(result)
        }
    })
})


http://localhost:8080/listar-usuarios/jorginho

server.get('/listar-usuarios/:login', function(req, res){

    let login = req.params.login

    mysql.query('SELECT * FROM USUARIOS WHERE LOGIN = ?', [login], function(error, result){
        if(error){
            console.log('Erro ao consultar usuários')
            return res.status(500).json(error.stack)
        }else{
            console.log(result);
            return res.status(200).json(result)
        }
    })
})








