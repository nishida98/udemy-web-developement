const nuns = [1,2,3,4,5,6,7,8,9]

externo: for(a in nuns) { //externo é um rotulo para o primeiro for
    for(b in nuns){
        if(a == 2 && b == 3){
            break externo
        } else{
            console.log(`Par = ${a}, ${b}`)
        }
    }
}