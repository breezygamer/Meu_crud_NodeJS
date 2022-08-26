const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = 3000;


app.post("/cad", (req, res)=>{
    let dados = req.body.nome
    console.log(dados)
    res.send(dados)
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})