// Map : Pratique a sintaxe de multiplicação de números uma vez utilizado o parâmetro this de um objeto criado por você e depois sem ele

const maca = {
    value:2, 
}

const laranja = {
    value:8,
}

function mapComthis (arr, thisArg) { 
    return arr.map(function(item) { 
        return item * this.value; 
    }, thisArg);  
}
const nums = [1, 2] 

console.log('this -> maçã ', mapComthis(nums,maca));
console.log('this -> laranja', mapComthis(nums,laranja));














