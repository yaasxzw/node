// imprimindo mais de um valor

const x = 10
const y = 'yasmim'
const z = [1, 2]

console.log(x, y, z)

//contagem de impressões

console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)

//variavel entre string

console.log('o nome é %s, ela é aluna', y)

setTimeout(() => {
    console.clear()
}, 200)