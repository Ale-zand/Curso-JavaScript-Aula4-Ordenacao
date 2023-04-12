const livros = require('./listalivros.js');
const menorValor = require('./menorValor.js');

// O -1 é pq não é preciso verificar o ultimo livro com ele mesmo
for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log('posição atual', atual);
    console.log('livro atual', livros[atual]);
    let livroMenorPreco = livros[menor];
    console.log('livro menor preço', livros[menor]);
    
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);

// usando forEach:
// livros.forEach((_, indice) => {
//     let menor = menorValor(livros, indice)
   
//     let livroAtual = livros[indice];
//     let livroMenorPreco = livros[menor];
   
//     livros[indice] = livroMenorPreco
//     livros[menor] = livroAtual 
// })
   
// console.log(livros)