const { resolveSoa } = require("dns");
const http = require("http");

const ip = 'localhost';  //ou pode ser 127.0.0.1 (máquina local)// 
const port = '8080';

let server = http.createServer((req, res) => {
    exibeMensagem();
    res.end('Response OK');
})

server.listen(port, ip, ()=> {
    console.log('Escutando servidor;')
});

function exibeMensagem(){
    console.log ('Recebendo requisicao');
}