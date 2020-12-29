const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[9]() //como var não tem escopo de função a variavel i não respeita o momento da atribuição