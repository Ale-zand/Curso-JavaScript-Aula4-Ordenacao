const livros = require('./listaLivros.js');

function insertionSort(lista) {

    for(let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];
            
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;
            
            //obrigatório pra não criar loop infinito. Com o analise-- uma hora a condição do while vai ser falsa e ele vai parar o loop.
            analise--;
        }
    }


    console.log(lista);
}

insertionSort(livros);

//Dá pra fazer o mesmo código inciando o índice "atual" com 1. Dessa forma não seria necessário incluir uma condição adicional no while(para evitar erro de while análise = -1).

// function insertionSort(lista) {

//     for(let atual = 1; atual < lista.length; atual++) {
//         let analise = atual;
        
//         while (lista[analise].preco < lista[analise - 1].preco) {
//             let itemAnalise = lista[analise];
//             let itemAnterior = lista[analise - 1];
            
//             lista[analise] = itemAnterior;
//             lista[analise - 1] = itemAnalise;
            
//             //obrigatório pra não criar loop infinito. Com o analise-- uma hora a condição do while vai ser falsa e ele vai parar o loop.
//             analise--;
//         }
//     }


//     console.log(lista);
// }

// insertionSort(livros);