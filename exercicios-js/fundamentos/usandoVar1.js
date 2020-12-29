{
    {
        {
            { 
                var sera = 'Será??' //escopo global
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //escopo dentro da funcao
    console.log(local)
}

console.log(local)
