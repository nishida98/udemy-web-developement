function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }

    console.log(soma)
}

soma(1,2,3,4,5,6,7,8,9,10)