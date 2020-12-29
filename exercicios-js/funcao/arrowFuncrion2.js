function pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++//com uma arrow function o this não varia
        console.log(this.idade)
    }, 1000)
}

new pessoa