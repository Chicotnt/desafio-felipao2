//Calculadora de partidas hankeadas
//solicitar numero de vitorias e de derrotas
const vitorias = perseInt(prompt("Escreva o numero de vitorias:"));
const derrotas = perseInt(prompt("Escreva o numero de derrotas:"));

//função calcular nivel
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if(vitorias < 10) {
       nivel = "Ferro";
    }
    else if(saldoVitorias >= 11 && saldoVitorias <=20) {
            nivel = "Bronze";
    }
    else if(saldoVitorias >=21 && saldoVitorias <= 50) {
            nivel = "Prata";
    }
    else if(saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "Ouro";
    }
    else if(saldoVitorias>= 81 && saldoVitorias <= 90) {
            nivel = "Diamante";
    }
    else if(saldoVitorias >= 91 && saldoVitorias <= 100) {
           nivel = "Lendário";
    }
    else {
        nivel = "Imortal";
    }
    //retornar resultado para a variável
    return 'O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}'
    }
   
    const resultado = calcularNivel(vitorias, derrotas);
    console.log(resultado);

      