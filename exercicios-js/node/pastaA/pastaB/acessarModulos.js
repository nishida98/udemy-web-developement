//const moduloA = require('../../01.moduloa') Assim funciona no mac e windows menso no 
const moduloA = require('../../01.moduloA') 
console.log(moduloA.ola) 

const c = require('./pastaC')
console.log(c.ola2)

/*
const http = require('http') //Modulo do core do node
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(5000)*/