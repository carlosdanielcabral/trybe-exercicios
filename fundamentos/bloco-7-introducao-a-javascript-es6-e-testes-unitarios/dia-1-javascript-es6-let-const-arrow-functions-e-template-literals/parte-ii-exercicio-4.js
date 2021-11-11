const skills = ['html', 'css', 'javascript', 'git', 'github'];
const stringQualquer = 'Olá, x!';

const novaString = string => {
    let stringModificada = stringQualquer.includes('x') ? stringQualquer.replace('x', string) : stringQualquer;
    return stringModificada;
}

console.log(novaString('Carlos'));