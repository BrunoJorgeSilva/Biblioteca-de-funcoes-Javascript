// Como somar e subtair datas javascript
const data =   moment('2012/02/22', 'YYYY/MM/DD').format('Do MMM YYYY dddd') 
let d1 = "29/08/1994";
let d2 = "31/08/1994";

var diferenca = moment(d2, "DD/MM/YYYY").diferenca(moment(d1, "DD/MM/YYYY")); 


var dias = moment.duration(diferenca).asDays(); 

console.log(dias);




