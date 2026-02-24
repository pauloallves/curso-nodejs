//Chalk 4 : CommonJS -> require
//const chalk = require("chalk"); -> a partir do Chalk v5 ele virou ESM only (não funciona mais com require)

//ES Modules -> import
import chalk from "chalk"; //No Chalk v5+ você precisa usar import (ES Modules)

const nota = 6;

//console.log(chalk.green('Parabéns! Você foi aprovado!'));

if ( nota >= 7){
    console.log(chalk.green('Parabéns! Você foi aprovado!'));
}else{
     console.log(chalk.bgRed('Você precisa fazer a prova de recuperação! :('));
}
