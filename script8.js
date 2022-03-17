function divididoPorDois (arr) {
    let novoarray = [];
for (let i = 0 ; i < arr.length ; i++) {
   novoarray.push(arr [i] / 2);
}

return novoarray

}

const numerinhos = [2, 4, 6, 8, 10]

let res = divididoPorDois (numerinhos)
console.log(res)