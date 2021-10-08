let pecaDeXadrez = "bispo";

switch (pecaDeXadrez) {
    case "peao":
        console.log("movimenta-se para frente e captura na diagonal");
        break;
    case "cavalo":
        console.log("movimenta-se em 'L'");
        break;
    case "bispo":
        console.log("movimenta-se na diagonal");
        break;
    case "torre":
        console.log("movimenta-se na vertical e horizontal");
        break;
    case "dama":
        console.log("movimenta-se em todas as direções");
        break;
    case "rei":
        console.log("movimenta-se em todas as direções");
        break;
    default:
        console.log("Digite uma peça válida");
}