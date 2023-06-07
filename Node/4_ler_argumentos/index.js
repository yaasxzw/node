//node index.js nome=Guedes idade=17
console.log(process.argv);

const args = process.argv.slice(2)
console.log(args);

const nome = args[0].split('=')[1]
console.log(nome);

console.log(`o nome é ${nome} a idade é ${idade}`)
