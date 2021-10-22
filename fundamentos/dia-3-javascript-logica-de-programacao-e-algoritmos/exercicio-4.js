let n = 5;
let linhas = n;

for (let i = 0; i < n; i++) {
    if (linhas > 1) {
        linhas -= 2;
    } else {
        break
    }
}

for (i = 0; i < (linhas + 1); i++) {
    let espacos = '';

    let asteriscos = '';

    for (j = 1; j < 6; j += 2) {
        let espacoTotal = n - j;
        for (k = 1; k < espacoTotal / 2; k++) {
            espacos += ' ';
        }
    }

    console.log(espacos.length);



}

