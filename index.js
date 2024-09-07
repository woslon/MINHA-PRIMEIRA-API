const express = require('express');
const app = express();

let data = new Date();

let mensagem_do_dia = require('./mensagem_do_dia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagem_do_dia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})

// Uma api que informa uma frase conforme a data atual