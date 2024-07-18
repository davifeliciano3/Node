/* const express = require('express');
const app = express();//mexe com as rotas

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send(`
        <form action='/' method='POST'>
        Digite seu nome: <input type='text' name="nome">
        <button>Enviar</button>
        </form>
        `);
});
//paramets /t/:idUsuarios?
//query /t/?nome=davi&sobrenome=sousa?

app.get('/t/:idUsuarios?',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
})

app.post('/',(req,res) =>{

    res.send(` Seu nome: ${req.body.nome}`);
})


app.listen(3000,()=>{
    console.log("Acessar: http://localhost:3001")
    console.log("servidor executando na porta 3001")
});

 */