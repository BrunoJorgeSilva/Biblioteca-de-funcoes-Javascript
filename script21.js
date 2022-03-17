// maps sets e etc 

let produtos = new Map([

["01", "Plano Pré Pago"],
["02", "Plano controle 2Gb"],
["03", "Plano Descontão Família"],
["04", "Plano Tudo em Dobro para dois!"],
])

produtos.set("05", "Plano Pré Pago Duplo")

function info(chave,valor){
console.log("Chave: " + chave + " - Valor: " + valor)


}


//produtos.forEach(info)
console.log(produtos)






