const pessoa = {
    nome: 'Miguel', 
}

const animal = {
    nome: 'Murphy', 

}

function getSomenthing() {
    console.log(this.nome); 
}
let res = getSomenthing.call(animal)
let res2 = getSomenthing.call(pessoa)
console.log(res, res2)