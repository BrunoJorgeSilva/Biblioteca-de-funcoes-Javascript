// agora utilizando o reduce. 

const produtos = [ 
    {
    nome: "notebook",
    preco: 2100
    }, 
    {
    nome: "geladeira",
    preco: 4000
    },
    {
        nome: "freezer",
        preco: 6000
    }
    
    ]

    
    const total = produtos.reduce((a, b) => a + b.preco, 0)  
    console.log(total)  
    