    // • Passo 1 - Se a peça possuir um peso superior a 100gramas, pode cadastrar.
    // • Passo 2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
    // • Passo 3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.



let listaPecas = ["Teclado", "Gabinete","Mouse", "Caixa de Som", "Webcam", "Cabos","Computador"];

let nomePeca = "Pc";
let pesoPeca = 350;


if(listaPecas.length >= 10){ 
    console.log("Não pode mais cadastrar peças. Limite atingido de 10 itens ATINGIDO");
} else{ 

    if(pesoPeca >= 100){
        console.log("A peça possui mais de 100 gramas e pode ser cadastrada de boa");
        if (nomePeca.length < 3){
            console.log("Então cara, o nome do produto tem que ter mais de 3 letras, você vacilou");
     
 
        }
    }
}
