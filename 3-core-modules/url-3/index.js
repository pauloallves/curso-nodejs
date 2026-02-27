const url = require('url');
const addres = 'https://meusite.com.br/catalog?produtos=cadeira';
const parsedUrl =  new url.URL(addres);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));