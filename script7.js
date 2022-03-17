function vezesDoisArray (arr) {
    let multiplicados = [];
for (let i = 0 ; i < arr.length ; i++) {
    multiplicados.push(arr[i] * 2);
}
return multiplicados; 



}
const meusNumeros = [4,2,4,8,10,12]

let res = vezesDoisArray (meusNumeros)
console.log(res);