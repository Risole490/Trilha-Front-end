var x = 5;
var y = 3; // Escopos globais, estão fora de uma estrutura

console.log(x, y)

function teste() {
    var z = 4; // Escopo local

    console.log(z)
}

teste();

// console.log(z) variável z está undefined pq ta dentro de uma função, sendo variavel local.

function testando() {
    var z = 5; // esta variável não se misturá com a outra z, pq ela ta sendo definida como local dentro desta função, assim como a outra.

    console.log(z)
}

testando();

if(true) {
    var p = 1; // if não declara a variável local, então pode ser chamada fora 
}

console.log(p);