const chalk = require('chalk')

const nota = 10

if (nota >= 7){
    console.log(chalk.green('Parabéns,  você foi aprovado!'))
} else {
    console.log(chalk.bgRed('Você foi reprovado!'))
}

