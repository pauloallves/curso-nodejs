const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    //Forma sem tratamento do Erro
    /*fs.readFile('mensagem.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();*/

    //Com tratamento de Erro
    fs.readFile('mensagem.html', function(err, data){
        if (err){
            res.writeHead(500, {'Content-Type': 'text/html'});
            return res.end('Erro interno do servidor');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    })
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});