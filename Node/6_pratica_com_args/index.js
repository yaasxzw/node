// externo

const minimist = require('minimist')

// interno

const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))
//slice = pecorre a string ou array para selecionar a faixa do valor determinado.

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)