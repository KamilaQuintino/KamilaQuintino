let clientelilit = {
  carrinho: [
    {produto: 'Bolsa pequena', valor: 49.0},
    {produto: 'Cinto preto', valor: 62.0},
    {produto: 'Jaqueta Jeans',valor: 350.0},
    {produto: 'Calça preta', valor: 290.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 80.0}
  ] 
  
}
  
function carrinho(cliente){
  let valorTotal = 0
let valorTotalComDesconto = 0
for (let produto of cliente.carrinho){
  let ProdutoEmPromoção = produto.valor
  if (ProdutoEmPromoção < 100 && ProdutoEmPromoção >= 60){
    ProdutoEmPromoção = ProdutoEmPromoção - ProdutoEmPromoção*0.10;
    console.log("Seu produto tem desconto de 10%!")
  }else if (ProdutoEmPromoção < 200 && ProdutoEmPromoção >= 100){
    ProdutoEmPromoção = ProdutoEmPromoção - ProdutoEmPromoção*0.20;
    console.log("Seu produto tem desconto de 20%!")
  }else if (ProdutoEmPromoção >= 200){
    ProdutoEmPromoção = ProdutoEmPromoção - ProdutoEmPromoção*0.50;
    console.log("Seu produto tem desconto de 50%!")
  }
  console.log(ProdutoEmPromoção)
  valorTotalComDesconto = valorTotalComDesconto + ProdutoEmPromoção

  valorTotal = valorTotal + valorTotal
}

  console.log(valorTotal)
  console.log(valorTotalComDesconto)

  if (valorTotalComDesconto >=800 || cliente.carrinho.length >=9){
      console.log("Parabéns! Você ganhou um cupom de 50 reais para proxima compra!")
  }
    }

