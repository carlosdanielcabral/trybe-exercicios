const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  return names.reduce((acc, name) => {
    acc += name.split('').reduce((acc2, letter) => {
      if (letter.toLowerCase() === 'a') acc2 += 1;
      return acc2;
    }, 0);
    return acc;

  }, 0)
};
