require('colors');
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const path = require('path');

const MongoClient = mongodb.MongoClient
const uri = "mongodb+srv://souzabee:tnx6AJ2XozCGI59L@posts.znrdpwr.mongodb.net/?retryWrites=true&w=majority&appName=posts"

const client = new MongoClient(uri);

var app = express();
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

client.connect().then(() => {
    const dbo = client.db("posts");
    const usuarios1 = dbo.collection("usuarios1");
    const carros = dbo.collection("carros");

   
    app.post("/cadastrar", (req, res) => {
        console.log("Recebi o POST:", req.body);
        
        const data = {
            db_nome: req.body.nome,
            db_user: req.body.user,
            db_senha: req.body.senha
        };

        usuarios1.insertOne(data)
            .then(() => {
                res.render('cadastrado',
                     {db_nome: data.db_nome,
                    db_user: data.db_user,
                    db_senha: data.db_senha
            });
            })
            .catch((err) => {
                console.error("Erro no insertOne:", err);
                res.render('erro');
            });
    });
    

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'login.html'));

    });

    app.post("/logar_usuario", async function(req, resp) {
    try {
        var data = {db_user: req.body.user, db_senha: req.body.senha };
        const usuario = await usuarios1.findOne(data);
        
        if (!usuario) {
            return resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"});
        }
        
        return resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"});
    } catch (err) {
        console.error("Erro no login:", err);
        return resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"});
    }
});

app.get('/cadastrar_carro', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'gerenciar_carros.html'));
    
    });

    app.post("/cadastrar_carro", async (req, res) => {
    console.log("Recebi o POST:", req.body);

    const data = {
        db_marca: req.body.marca,
        db_modelo: req.body.modelo,
        db_ano: req.body.ano,
        db_qtd: req.body.qtd
    };

    try {
        await carros.insertOne(data);
        res.redirect('/carro_cadastrado');  // <- Redireciona após salvar
    } catch (err) {
        console.error("Erro no insertOne:", err);
        res.status(500).render('erro');
    }
});


    app.get('/carro_cadastrado', async (req, res) => {
    try {
        const posts = await carros.find().toArray();
        res.render('carros_cadastrado', { posts });
    } catch (err) {
        res.status(500).send("Erro ao buscar posts");
    }
});

app.get('/carros/editar/:id', async (req, res) => {
    try {
        const carro = await carros.findOne({ _id: new mongodb.ObjectId(req.params.id) });
        res.render('editar_carro', { carro });
    } catch (err) {
        res.status(500).send("Erro ao carregar carro para edição.");
    }
});

// Submissão da edição
app.post('/carros/editar/:id', async (req, res) => {
    try {
        const id = new mongodb.ObjectId(req.params.id);
        const novosDados = {
            db_marca: req.body.db_marca,
            db_modelo: req.body.db_modelo,
            db_ano: req.body.db_ano,
            db_qtd: req.body.db_qtd
        };
        await carros.updateOne({ _id: id }, { $set: novosDados });
        const posts = await carros.find().toArray();
        res.render('carros_cadastrado', { posts });
    } catch (err) {
        res.status(500).send("Erro ao atualizar carro.");
    }
});

// Vender carro (decrementa 1 unidade)
app.get('/carros/vender/:id', async (req, res) => {
    try {
        const id = new mongodb.ObjectId(req.params.id);
        const carro = await carros.findOne({ _id: id });

        if (carro.db_qtd > 0) {
            await carros.updateOne({ _id: id }, { $inc: { db_qtd: -1 } });
        }

        const posts = await carros.find().toArray();
        res.render('carros_cadastrado', { posts });
    } catch (err) {
        res.status(500).send("Erro ao vender carro.");
    }
});

// Remover carro
app.get('/carros/remover/:id', async (req, res) => {
    try {
        const id = new mongodb.ObjectId(req.params.id);
        await carros.deleteOne({ _id: id });

        const posts = await carros.find().toArray();
        res.render('carros_cadastrado', { posts });
    } catch (err) {
        res.status(500).send("Erro ao remover carro.");
    }
});


   
   

    // Iniciar servidor.
    const server = http.createServer(app);
    server.listen(120, () => {
        console.log('Servidor rodando na porta 120'.rainbow);
    });

}).catch(err => {
    console.error("Erro ao conectar ao MongoDB:", err);
});


// app.post('/carros/remover_por_texto', async (req, res) => {
//     try {
//         const filtro = {};

//         // Cria dinamicamente o filtro
//         if (req.body.marca) filtro.db_marca = req.body.marca;
//         if (req.body.modelo) filtro.db_modelo = req.body.modelo;

//         // Se nenhum campo for enviado, não faz nada
//         if (Object.keys(filtro).length === 0) {
//             return res.send("Você precisa informar ao menos a marca ou modelo.");
//         }

//         const resultado = await carros.deleteMany(filtro);

//         console.log(`Removidos ${resultado.deletedCount} carros.`);
//         const posts = await carros.find().toArray();
//         res.render('carros_cadastrado', { posts });

//     } catch (err) {
//         console.error("Erro ao remover por texto:", err);
//         res.status(500).send("Erro ao remover carro por texto.");
//     }
// });