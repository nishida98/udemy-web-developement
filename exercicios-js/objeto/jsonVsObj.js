const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

console.log(JSON.parse(JSON.stringify(obj)))

const obj2 = {a: 1, b: 2, c: 3, d: {aa: 11, bb: 22, cc: 33}, soma(){return a+b+c}}
console.log(JSON.stringify(obj2))

const obj3 = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: {
        aa: 11, 
        bb: 22, 
        cc: 33
    }, 
    e: [{
        aaa: 111,
        bbb: 222,
        ccc: 333
    },
    {
        aaa: 111,
        bbb: 222,
        ccc: 333
    }],
    soma(){return a+b+c}
}
console.log(JSON.stringify(obj3))

