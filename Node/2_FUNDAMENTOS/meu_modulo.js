module.exports ={
    soma(a, b){
        console.log(`$(a+b)`)
    },
    sub(a, b){
        console.log(`$(a-b)`)
    },
    multi(a,b){
        console.log(`$(a*b)`)
    }, 
    div(a,b){
        if(b <= 0){
            console.log('Error')
        }else{
            console.log(`$(a/b)`)
        }
    }
}