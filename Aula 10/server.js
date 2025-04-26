var http = require('http');
var express = require('express');
var colors = require('colors');
var app = express();
app.use(express.static('./public'));
var server = http.createServer(app);
server.listen(80);
console.log("servidor rodando".rainbow);
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (request, resposta){
    resposta.redirect('/pagina.html')
});

app.get('/cadastro', function(request, resposta){
    var user = request.query.user;
    var senha = request.query.senha
    console.log(user)
    console.log(senha)

    resposta.render('login', {user, senha})
    
    
});


app.post('/cadastro', function(request, resposta){
    var user = request.body.user
    var senha = request.body.senha
    

    resposta.render('resposta_cadastro', {user, senha})
    
})

app.set('view engine', 'ejs')
app.set('views', './views')