function filtraPares(arr) { 
    return arr.filter(function (item) { 
        return item % 2 !== 0;
    });
}

const nums = [1, 2, 3, 4, 5, 6, 7];


console.log(filtraPares(nums));

console.log(nums); 