const angulo1 = 90;
const angulo2 = 50;
const angulo3 = 40;

const somaDosAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
}