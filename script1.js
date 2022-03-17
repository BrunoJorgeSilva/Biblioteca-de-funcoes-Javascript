function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
    if (arguments[i]> max) {
        max = arguments[i];
    }

    }
    return max;
}
let res = findMax(5,2,3,1,2); 
console.log(res); 