// aprenderemos a estrutura map dentro do javascript. 

const produtos = [ 
{
nome: "notebook",
preco: 2100
}, 
{
nome: "geladeira",
preco: 4000
}
]

const precosEmReais = produtos.map(p => p.preco * 5.49); 
console.log(precosEmReais);
console.log(produtos); 