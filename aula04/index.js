const express = require('express');

const server = express();

//declaramos o IP E PORTA da API
const ip = 'localhost';
const port = '8080';

server.listen(port, ip)

//Rota raiz
server.get('/', function(req, res){
    return res.send('Bem vindo!')
})

//Requisição GET
server.get('/consultar', (req, res)=> {
    return res.send('<h1>Consulta realizada com sucesso, meu nobre!</h1>')
})

// Disponibilizar um endpoint para que o usuário possa informar seu nome, idade, cpf. Esse endpoint ira retornar uma mensagem de boas vindas. 
//("https://localhost:8080/mensagem-boas-vindas/Joao/18/532.747.658-80")
server.get('/test/:nome/:idade/:cpf/:orientacao-sexual', (req, res) => {
    
    let nome = req.params.nome;
    let idade = req.params.idade;
    let cpf = req.params.cpf;
    let sexo = req.params.orientacao-sexual;

    return res.send(`${nome} <br> ${idade} <br> ${cpf} <br> ${sexo} ` );

})

//Criamos uma rota para fazer um cálculo
server.get('/calcular/:numero', (req, res) => {
    let numero = (req.params.numero);
    
    let resultado = numero * numero;
    
    return res.send(`${resultado}`);
})


//GET com Querry Param
server.get('/gravar-usuario', (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;
    let cpf = req.query.cpf;

    
    return res.send(`${nome} <br> ${idade} <br> ${cpf} ` );
})


server.get('/pagamento-online/:pagamento/:pago', (req, res) => {
    let pagamento = parseFloat(req.params.pagamento);
    let pago = parseFloat(req.params.pago);
    let resultado = pago - pagamento;

    if (pago < pagamento) {
        return res.send(`Compra não realizada no valor de ${pagamento} por falta de saldo`);
    } else {
        return res.send(`Compra realizada no valor de ${pagamento}. Seu saldo restante é de ${resultado}`);
    }
});

server.get('/consultar-cliente', (req,res) => { 

    const cliente ={ nome: 'João Slengman', agencia: '0001-1', conta: '0001-241', saldo: '0.1' };

    const clienteJSON = JSON.stringify(cliente);
    return res.send(`${clienteJSON}`)
})
