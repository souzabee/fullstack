
var http = require('http');
var express = require('express');
var colors = require('colors');
var app = express();
app.use(express.static('./public'));
var server = http.createServer(app);
server.listen(70);
console.log("servidor rodando".rainbow);
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = `mongodb+srv://souzabee:<9kqxAm2mnWYvrI8f>@souzabee.ewaia0w.mongodb.net/?retryWrites=true&w=majority&appName=souzabee`;


const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");


app.post ('/cadastro', function(request, resposta){

    var data = { 
        db_titulo: request.body.titulo, 
        db_resumo: request.body.resumo, 
        db_conteudo: request.body.conteudo 
    }
    usuarios.insertOne(data)
    const posts = usuarios.find().toArray();
    resposta.render('blog', {posts})
    

}) 