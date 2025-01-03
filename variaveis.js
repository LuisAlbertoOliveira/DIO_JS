let precoEtanol = 4.15;
let precoGasolina = 6.39;
let kmPorLitro = 10.8;
let distanciaPercorrida = 900;
let estaUsandoEtanol = false;
let gastoDaViagem;

if (estaUsandoEtanol) {
    gastoDaViagem = (distanciaPercorrida / kmPorLitro) * precoEtanol;
    console.log("Gasto com ETANOL para percorrer " + distanciaPercorrida + " Km é R$ " + gastoDaViagem.toFixed(2));
} else {
    gastoDaViagem = (distanciaPercorrida / kmPorLitro) * precoGasolina;
    console.log("Gasto com GASOLINA para percorrer " + distanciaPercorrida + " Km é R$ " + gastoDaViagem.toFixed(2));
}
//Calculando e imprimindo
//console.log("Gasto com combustível para percorrer "+distanciaPercorrida+" Km é R$ "+gastoDaViagem.toFixed(2));