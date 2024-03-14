const { response } = require('express');
const express = require('express');

const server = express(); //127.0.0.1

const ip = '127.0.0.1'
const port = '8080';

server.listen(port, ip, ()=> {
    console.log('Servidor executando');
});

//rota: http://localhost:8080/consultar

server.get('/consultar', (request, response) =>{
    return response.json();
})


//rota: http://localhost:8080/gravar-venda
/**
 * {
 * codigo: '12345'
 * valor: '85'
 * }
 */
server.post('/gravar-venda', (drake, josh)=>{
    console.log(drake.body.codigo)
    console.log(drake.body.valor)
    return response.json(drake.body);
})