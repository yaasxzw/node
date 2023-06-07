// const fs = require('fs')
// fs.readFile('arquivo.txt', 'utf8', (err, data)=> {
//     if (err){
//         console.log(err)
//     }
//     console.log(data)
// });

// const fs = require('fs')
// fs.appendFile('arquivo.txt', 'Suas putas', function (err){
//     if (err) throw(err)

//     console.log('updated!')
// });


// const fs = require('fs')
// fs.open('arquivo2.txt', 'w', function (err){
//     if (err) throw(err)

//     console.log('updated!')
// });

//Metodo para substitur
// const fs = require('fs')
// fs.writeFile('arquivo2.txt', 'Ela (saraiva) só da pra bandido', function (err){
//     if (err) throw(err)

//     console.log('saved!')
// });

//Excluir o arquivo
// const fs = require('fs')
// fs.unlink('arquivo2.txt', function (err){
//     if (err) throw(err)

//     console.log('saved!')
// });

//renomear arquivo
const fs = require('fs')
fs.rename('arquivo.txt', 'novo_arquivo', function (err){
    if (err) throw(err)

    console.log('updated!')
})