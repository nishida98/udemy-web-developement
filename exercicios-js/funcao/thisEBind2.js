function pessoa(){
    this.idade = 0

    const self = this //está substituindo a função bind

    setInterval(function(){
        //this.idade++
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa