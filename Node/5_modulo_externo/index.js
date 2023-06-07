const minimist = require('minimist')
// console.log(minimist)
//node index.js --nome=yasmim --idade=17
const args = minimist(process.argv.slice(2))
console.log(args)
const nome = args['nome']
const idade = args['idade']

console.log(`o nome ${nome} e idade ${idade}`)