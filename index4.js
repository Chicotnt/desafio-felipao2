class Hero {
    
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;

        this.tipos = ["mago", "guerreiro", "monge", "ninja"];
        this.ataques = ["magia", "espada", "artes marciais", "shuriken"]
        this.tipo = tipo % this.tipos.length;
    }
    getTipo() {
        return this.tipos[this.tipo];
    }
    getAtaque() {
        return this.ataques[this.tipo];
    }
    ataque() {
        console.log(`O ${this.getTipo()} atacou usando ${this.getAtaque()}`);
    }
    info() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, Tipo: ${this.getTipo()}`);
    }
}

for(let i = 0; i < 4; i++) {
    let chicotnt = new Hero("chicotnt", 0, i);
    chicotnt.ataque();
}