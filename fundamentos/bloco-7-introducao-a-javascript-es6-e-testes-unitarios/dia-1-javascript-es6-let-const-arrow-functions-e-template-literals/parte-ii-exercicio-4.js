const skills = ['html', 'css', 'javascript', 'git', 'github'];
const stringQualquer = 'Olá, meu nome é x';

const novaString = string => {
    let stringModificada = stringQualquer.includes('x') ? stringQualquer.replace('x', string) : stringQualquer;
    return stringModificada;
}

const retornarNomeEHabilidades = funcao => {
    skills.sort();
    let skillsString = skills.join(';\n');

    let novaString = `${funcao} e minhas principais habilidades são: 
${skillsString}
#goTrybe`;

    return novaString;
}

console.log(retornarNomeEHabilidades(novaString('Carlos')));
