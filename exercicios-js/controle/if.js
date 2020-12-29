function soBaoNoticia(nota) {

    if(nota >= 7) {

        console.log('Aprovado com ' + nota)

    }

}

soBaoNoticia(5)
soBaoNoticia(8)

function seForVerdadeiroEuFalo(valor) {

    if(valor) {
        console.log('É verdade... ' + valor)
    }

}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1,2])
seForVerdadeiroEuFalo({})