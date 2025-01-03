/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let precoProduto = 100.00;
let formaPagamento ='4x';
let valorAPagar;
if(formaPagamento === 'Debito'){
    valorAPagar = 0.9*precoProduto;
}else if(formaPagamento === 'Dinheiro' || formaPagamento === 'PIX'){
    valorAPagar = 0.85*precoProduto;
}else if(formaPagamento === '2x'){
    valorAPagar=precoProduto;
}else{
    valorAPagar=1.1*precoProduto;
}
console.log('O preço a pagar pelo produto é R$ '+valorAPagar.toFixed(2));