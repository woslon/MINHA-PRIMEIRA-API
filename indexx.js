const express = require ('express');
const app = express();

app.get('/', (req, res )=>{

res.json({mensagem:'ola mundo'})

});

app.listen(8080, ()=>{

    let data = new Date();
    console.log('servidor rodando na porta  8080 '+ data )
})

// Desenvolvendo minha primeira api