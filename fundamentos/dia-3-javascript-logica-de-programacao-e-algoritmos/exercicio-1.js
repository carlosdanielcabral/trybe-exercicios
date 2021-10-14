let n = 5;
let asteriscos = '';
for (let i = 0; i < n; i += 1) {
    if (asteriscos.length < n) {
        for (let j = 0; j < n; j += 1) {
            asteriscos += '*';
        }
    }

    console.log(asteriscos);
}
