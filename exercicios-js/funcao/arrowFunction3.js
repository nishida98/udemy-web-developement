let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

comparaComThis = param => console.log(this === param)
comparaComThis(global)
comparaComThis(module.exports)

comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)
comparaComThis(module.exports)
