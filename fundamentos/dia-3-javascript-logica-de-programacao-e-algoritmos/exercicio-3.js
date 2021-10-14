let n = 5;

for (let i = 1; i < (n + 1); i++) {
    let espacos = '';
    let asteriscos = '';

    for (let j = 0; (j < n - i); j++) {
        espacos += ' ';
    }  
    
    asteriscos += espacos; 

    for (let k = 0; k < n; k++) {
        if (asteriscos.length < n) {
            asteriscos += '*';
        }
    }
    // 4 espacos

    console.log(asteriscos);
}

