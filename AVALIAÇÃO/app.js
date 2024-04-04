
const express = require('express');

const server = express();

const ip = 'localhost'
const port = '8080';

server.listen(port, ip, ()=>{
    console.log('Servidor executando');
});

//Rota padrão
server.get('/' , function(req, res){
    return res.send("Bem Vindo!")
})

//Exercício 01 
server.get('/consultar/:ID/:sal_bruto/:aliquota/', (req, res) =>{

    let ID = req.params.ID;
    let sal_bruto = req.params.sal_bruto;
    let aliquota = req.params.aliquota;
    let imposto = aliquota * sal_bruto / 100;
    let sal_liq = sal_bruto - imposto;


    return res.send(`<h4>ID_FUNCIONÁRIO:${ID}</h4><h4>SALÁRIO BRUTO R$:${sal_bruto}</h4><h4>IMPOSTO RETIDO R$:${imposto}</h4><h4>SALÁRIO LÍQUIDO R$:${sal_liq}</h4>`);

})

let messageArray = [];

server.get('/mensagem', (req, res) => {

    let ID_USUARIO = req.query.ID_USUARIO;
    let ID_POST = req.query.ID_POST;
    let MESSAGE = req.query.MESSAGE;

    let NewmessageArray = {
        ID_USUARIO:ID_USUARIO,
        ID_POST:ID_POST,
        MESSAGE:MESSAGE
    };

    messageArray.push(NewmessageArray)

    console.log(NewmessageArray);

    return res.send(`<h4>ID_USUARIO:${ID_USUARIO}</h4><h4>ID_POST:${ID_POST}</h4><h4>MENSAGEM:${MESSAGE}</h4>` )

});
