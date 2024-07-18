exports.Primeiro = (req,res) => {
   res.send( `<form action='/' method='POST'>
    Digite seu nome: <input type='text' name='nome'>
    <button>Enviar</button>
    </form>`);
};

exports.Segundo = (req,res) =>{
    res.send(`Seu Nome: ${req.body.nome}`)
};