const readline = require('readline');//o nome da constante pode ser qualquer um

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tabuada(numero) {//o Nome da função pode ser qualquer um e entre parenteses é o nome da variavel de entrada do usuario
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
}

rl.question('Digite um número para exibir a tabuada:', (numero) => {//question executa um console log seguida por uma virgula e entre parenteses é o nome da variavel que vai receber a resposta do usuario
    numero = parseInt(numero);//apenas converte a entrada em um numero inteiro

    if (!isNaN(numero)) {
        tabuada(numero);
        rl.close();
    } else {
        console.log("Por favor, insira um número válido.");
        rl.close();
    }
});
//tabuada usando chamada de funções e require para leitura, 
//Autor Luiz Gorte