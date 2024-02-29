
const expressModule = require('express');

const port = '9090';

const ip = 'localhost';

//declarou uma instancia ao servidor
let server = expressModule();

//diz ao servidor para tratar gets json
server.use(expressModule.json())

//Subindo servidor
server.listen(port, ip, ()=>{
    console.log(`Servidor executando em ${ip}:${port}`)
})

//Criação de rota (endpoint) para exibir mensagem no console//
server.get('/exibir_mensagem', () => {
    console.log('Hello World :)');
})


//Criação de rota (endpoint) para exibir um objeto no navegador//
server.get('/exibir_mensagem_json', (req, res) => {
    return res.send('Mensagem navegador')
})

let pessoa = {
    'nome': 'Fulano',
    'idade': 10,
    'isBrasileiro': true
}

server.get('/busca-pessoa', (req, res) => {
    return res.json({'pessoa' : pessoa})
})

server.get('/calcula-soma', (req, res) =>{
    return res.send(`Servidor executando no ip: ${ip} e na porta ${port}`)
})
