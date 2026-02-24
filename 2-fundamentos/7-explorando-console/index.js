const x = 10;
const y = 'Paulo';
const z = [1, 2];

console.log(x, y, z);

//Contagem de impressões

console.count(`O valor de x é: ${x}, contagem:`);

//Iniciar variável entre String

console.log('nome é %s e ele é programador', y);

//limpar console
setTimeout(() => {
    console.clear()
}, 2000);