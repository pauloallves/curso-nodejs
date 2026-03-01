const http = require('http');
const fs = require('fs');
//const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {

    //const urlInfo = url.parse(req.url, true); * O método url.parse() é antigo e pode causar problemas de
    //const name = urlInfo.query.name; * segurança. Prefira usar a API moderna URL."
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const name = myUrl.searchParams.get('name');
    
    if (!name){
        fs.readFile('index.html', function(err, data){
            if (err){
                res.writeHead(500, {'Content-Type': 'text/html'});
                return res.end('Erro interno do servidor');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else{
        fs.writeFile('arquivo.txt', name, function(err, data){
            res.writeHead(302, {
                Location: '/',
            })
            return res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});