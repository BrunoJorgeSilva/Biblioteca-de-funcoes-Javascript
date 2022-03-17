function calculateDiff (v1,v2) {
let start = v1
let end = v2
start = new Date(start)
end = new Date (end)

let diffInTime = Math.abs(start - end) ; 
let timeInOneDay = 1000 * 60 * 60 * 24
let diffInDays = diffInTime / timeInOneDay

return diffInDays

}


const diffInDays = calculateDiff('2021-09-09','2021-10-09')
console.log(diffInDays)
