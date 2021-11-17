const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * dragon.strength) + 15;

const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * maxDamage) + warrior.strength;
} 

const mageDamageAndMana = () => {
  const maxDamage = mage.intelligence * 2;
  let damage = Math.floor(Math.random() * maxDamage) + mage.intelligence;
  let mana = mage.mana - 15;
  if (mage.mana < 15) {
    damage = 'Não possui mana suficiente';
    mana = 0;
  };

  return { damage, mana };
};

const gameActions = {
  warrior: (warriorDamage) => {
    dragon.healthPoints -= warriorDamage();
    warrior.damage = warriorDamage();
  },
  mage: (mageDamageAndMana) => {
    dragon.healthPoints -= mageDamageAndMana().damage;
    mage.damage = mageDamageAndMana().damage;
    mage.mana = mageDamageAndMana().mana;
  },
  dragon: (dragonDamage) => {
    mage.healthPoints -= dragonDamage();
    warrior.healthPoints -= dragonDamage();
    dragon.damage = dragonDamage();
  },
  returnBattleMembers: () => battleMembers,
};
