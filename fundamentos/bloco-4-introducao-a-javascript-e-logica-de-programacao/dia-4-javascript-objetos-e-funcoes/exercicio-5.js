let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};


let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O últimp MacPatinhas',
    recorrente: 'Sim'
};

let info3 = {};

for (let key in info) {
    info3[key] = info[key];
}

for (let key2 in info2) {
    info3[key2] += " e " + info2[key2]
}

for (let key3 in info3) {
    if (key3 === 'recorrente') {
        if (info.recorrente === info2.recorrente) {
            console.log('Ambos recorrentes');
        }
    } else {
        console.log(info3[key3]);
    }

}