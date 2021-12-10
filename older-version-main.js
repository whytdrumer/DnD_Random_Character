/*//////////////////////////////////////////////////////////////
                DEFINE CHARACTER CLASS & ITEMS
//////////////////////////////////////////////////////////////*/

const mainCharacter = ['High Elf', 'Drow', 'Human', 'Half Elf', 'Dwarf', 'Wood Elf', 'Gnome', 'Halfling', 'Dragonborn', 'Half Orc'];

const mainCharClass = {
  highelf: ['Artificer', 'Bard', 'Cleric', 'Monk', 'Paladin', 'Wizard'],
  drow: ['Artificer', 'Bard', 'Rogue', 'Sorcerer', 'Wizard',],
  human: ['Artificer', 'Barbarian', 'Cleric', 'Fighter', 'Druid', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Warlock', 'Wizard'],
  halfelf: ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock'],
  dwarf: ['Barbarian', 'Cleric', 'Fighter', 'Paladin', 'Ranger'],
  woodelf: ['Bard', 'Druid', 'Ranger', 'Rogue', 'Fighter'],
  gnome: ['Artificer', 'Bard', 'Cleric', 'Paladin', 'Rogue', 'Wizard'],
  halfling: ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Ranger', 'Rogue'],
  dragonborn: ['Artificer', 'Barbarian', 'Fighter', 'Paladin', 'Wizard'],
  halforc: ['Barbarian', 'Figher', 'Cleric', 'Paladin'],
}

const artificer = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const barbarian = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const bard = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const cleric = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const druid = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const fighter = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const monk = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const paladin = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const ranger = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const rogue = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const warlock = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const sorcerer = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

const wizard = {
  itemHead: ['None', 'Cap', 'Mask', 'Hood'],
  itemBody: ['Armor', 'Vest', 'Shirt', 'Robe',],
  mainHand: ['Dagger', 'Staff', 'Wand', 'Mace', 'Sword'],
  secondHand: ['Shield', 'Bracer', 'Orb', 'Spell Book', 'Lute'],
  specialItem: ['Amulet', 'Ring', 'Cloak', 'Ioun Stone'],
  itemFeet: ['Boots', 'Greaves', 'Slippers', 'Shoes'],
};

/*//////////////////////////////////////////////////////////////
                   CREATE MAIN CHARACTER
//////////////////////////////////////////////////////////////*/

const createCharRace = () => {
  let newCharRace = mainCharacter[Math.floor(Math.random() * mainCharacter.length)];
  return newCharRace;
}

let myRace = createCharRace();

/*//////////////////////////////////////////////////////////////
                   CREATE CHARACTER CLASS
//////////////////////////////////////////////////////////////*/

const createCharClass = newCharClass => {
  if (myRace === 'High Elf') {
    var newCharClass = mainCharClass.highelf[Math.floor(Math.random() * mainCharClass.highelf.length)];  
  }
  if (myRace === 'Drow') {
    var newCharClass = mainCharClass.drow[Math.floor(Math.random() * mainCharClass.drow.length)]; 
  }
  if (myRace === 'Human') {
    var newCharClass = mainCharClass.human[Math.floor(Math.random() * mainCharClass.human.length)]; 
  }
  if (myRace === 'Half Elf') {
    var newCharClass = mainCharClass.halfelf[Math.floor(Math.random() * mainCharClass.halfelf.length)]; 
  }
  if (myRace === 'Dwarf') {
    var newCharClass = mainCharClass.dwarf[Math.floor(Math.random() * mainCharClass.dwarf.length)]; 
  }
  if (myRace === 'Wood Elf') {
    var newCharClass = mainCharClass.woodelf[Math.floor(Math.random() * mainCharClass.woodelf.length)]; 
  }
  if (myRace === 'Gnome') {
    var newCharClass = mainCharClass.gnome[Math.floor(Math.random() * mainCharClass.gnome.length)]; 
  }
  if (myRace === 'Halfling') {
    var newCharClass = mainCharClass.halfling[Math.floor(Math.random() * mainCharClass.halfling.length)]; 
  }
  if (myRace === 'Dragonborn') {
    var newCharClass = mainCharClass.dragonborn[Math.floor(Math.random() * mainCharClass.dragonborn.length)]; 
  }
  if (myRace === 'Half Orc') {
    var newCharClass = mainCharClass.halforc[Math.floor(Math.random() * mainCharClass.halforc.length)]; 
  }
    return newCharClass;
};

let myClass = createCharClass();

/*//////////////////////////////////////////////////////////////
                CREATE CHARACTER HEAD ITEM
//////////////////////////////////////////////////////////////*/

const createCharItemHead = newCharItemHead => {
  if (myClass === 'Artificer') {
    var newCharItemHead = artificer.itemHead[Math.floor(Math.random() * artificer.itemHead.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharItemHead = barbarian.itemHead[Math.floor(Math.random() * barbarian.itemHead.length)];  
  }
  if (myClass === 'Bard') {
    var newCharItemHead = bard.itemHead[Math.floor(Math.random() * bard.itemHead.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharItemHead = cleric.itemHead[Math.floor(Math.random() * cleric.itemHead.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharItemHead = fighter.itemHead[Math.floor(Math.random() * fighter.itemHead.length)];  
  }
  if (myClass === 'Druid') {
    var newCharItemHead = druid.itemHead[Math.floor(Math.random() * druid.itemHead.length)];  
  }
  if (myClass === 'Monk') {
    var newCharItemHead = monk.itemHead[Math.floor(Math.random() * monk.itemHead.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharItemHead = paladin.itemHead[Math.floor(Math.random() * paladin.itemHead.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharItemHead = ranger.itemHead[Math.floor(Math.random() * ranger.itemHead.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharItemHead = rogue.itemHead[Math.floor(Math.random() * rogue.itemHead.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharItemHead = warlock.itemHead[Math.floor(Math.random() * warlock.itemHead.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharItemHead = sorcerer.itemHead[Math.floor(Math.random() * sorcerer.itemHead.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharItemHead = wizard.itemHead[Math.floor(Math.random() * wizard.itemHead.length)];  
  }
    return newCharItemHead;
};

let myItemHead = createCharItemHead();

/*//////////////////////////////////////////////////////////////
                CREATE CHARACTER BODY ITEM
//////////////////////////////////////////////////////////////*/

const createCharItemBody = newCharItemBody => {
  if (myClass === 'Artificer') {
    var newCharItemBody = artificer.itemBody[Math.floor(Math.random() * artificer.itemBody.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharItemBody = barbarian.itemBody[Math.floor(Math.random() * barbarian.itemBody.length)];  
  }
  if (myClass === 'Bard') {
    var newCharItemBody = bard.itemBody[Math.floor(Math.random() * bard.itemBody.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharItemBody = cleric.itemBody[Math.floor(Math.random() * cleric.itemBody.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharItemBody = fighter.itemBody[Math.floor(Math.random() * fighter.itemBody.length)];  
  }
  if (myClass === 'Druid') {
    var newCharItemBody = druid.itemBody[Math.floor(Math.random() * druid.itemBody.length)];  
  }
  if (myClass === 'Monk') {
    var newCharItemBody = monk.itemBody[Math.floor(Math.random() * monk.itemBody.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharItemBody = paladin.itemBody[Math.floor(Math.random() * paladin.itemBody.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharItemBody = ranger.itemBody[Math.floor(Math.random() * ranger.itemBody.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharItemBody = rogue.itemBody[Math.floor(Math.random() * rogue.itemBody.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharItemBody = warlock.itemBody[Math.floor(Math.random() * warlock.itemBody.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharItemBody = sorcerer.itemBody[Math.floor(Math.random() * sorcerer.itemBody.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharItemBody = wizard.itemBody[Math.floor(Math.random() * wizard.itemBody.length)];  
  }
    return newCharItemBody;
};

let myItemBody = createCharItemBody();

/*//////////////////////////////////////////////////////////////
                CREATE CHARACTER MAIN WEAPON
//////////////////////////////////////////////////////////////*/

const createCharMainHand = newCharMainHand => {
  if (myClass === 'Artificer') {
    var newCharMainHand = artificer.mainHand[Math.floor(Math.random() * artificer.mainHand.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharMainHand = barbarian.mainHand[Math.floor(Math.random() * barbarian.mainHand.length)];  
  }
  if (myClass === 'Bard') {
    var newCharMainHand = bard.mainHand[Math.floor(Math.random() * bard.mainHand.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharMainHand = cleric.mainHand[Math.floor(Math.random() * cleric.mainHand.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharMainHand = fighter.mainHand[Math.floor(Math.random() * fighter.mainHand.length)];  
  }
  if (myClass === 'Druid') {
    var newCharMainHand = druid.mainHand[Math.floor(Math.random() * druid.mainHand.length)];  
  }
  if (myClass === 'Monk') {
    var newCharMainHand = monk.mainHand[Math.floor(Math.random() * monk.mainHand.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharMainHand = paladin.mainHand[Math.floor(Math.random() * paladin.mainHand.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharMainHand = ranger.mainHand[Math.floor(Math.random() * ranger.mainHand.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharMainHand = rogue.mainHand[Math.floor(Math.random() * rogue.mainHand.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharMainHand = warlock.mainHand[Math.floor(Math.random() * warlock.mainHand.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharMainHand = sorcerer.mainHand[Math.floor(Math.random() * sorcerer.mainHand.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharMainHand = wizard.mainHand[Math.floor(Math.random() * wizard.mainHand.length)];  
  }
    return newCharMainHand;
};

let myMainHand = createCharMainHand();

/*//////////////////////////////////////////////////////////////
            CREATE CHARACTER SECONDARY WEAPON
//////////////////////////////////////////////////////////////*/

const createCharSecondHand = newCharSecondHand => {
  if (myClass === 'Artificer') {
    var newCharSecondHand = artificer.secondHand[Math.floor(Math.random() * artificer.secondHand.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharSecondHand = barbarian.secondHand[Math.floor(Math.random() * barbarian.secondHand.length)];  
  }
  if (myClass === 'Bard') {
    var newCharSecondHand = bard.secondHand[Math.floor(Math.random() * bard.secondHand.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharSecondHand = cleric.secondHand[Math.floor(Math.random() * cleric.secondHand.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharSecondHand = fighter.secondHand[Math.floor(Math.random() * fighter.secondHand.length)];  
  }
  if (myClass === 'Druid') {
    var newCharSecondHand = druid.secondHand[Math.floor(Math.random() * druid.secondHand.length)];  
  }
  if (myClass === 'Monk') {
    var newCharSecondHand = monk.secondHand[Math.floor(Math.random() * monk.secondHand.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharSecondHand = paladin.secondHand[Math.floor(Math.random() * paladin.secondHand.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharSecondHand = ranger.secondHand[Math.floor(Math.random() * ranger.secondHand.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharSecondHand = rogue.secondHand[Math.floor(Math.random() * rogue.secondHand.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharSecondHand = warlock.secondHand[Math.floor(Math.random() * warlock.secondHand.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharSecondHand = sorcerer.secondHand[Math.floor(Math.random() * sorcerer.secondHand.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharSecondHand = wizard.secondHand[Math.floor(Math.random() * wizard.secondHand.length)];  
  }
    return newCharSecondHand;
};

let mySecondHand = createCharSecondHand();

/*//////////////////////////////////////////////////////////////
              CREATE CHARACTER SPECIAL ITEM
//////////////////////////////////////////////////////////////*/

const createCharSpecialItem = newCharSpecialItem => {
  if (myClass === 'Artificer') {
    var newCharSpecialItem = artificer.specialItem[Math.floor(Math.random() * artificer.specialItem.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharSpecialItem = barbarian.specialItem[Math.floor(Math.random() * barbarian.specialItem.length)];  
  }
  if (myClass === 'Bard') {
    var newCharSpecialItem = bard.specialItem[Math.floor(Math.random() * bard.specialItem.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharSpecialItem = cleric.specialItem[Math.floor(Math.random() * cleric.specialItem.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharSpecialItem = fighter.specialItem[Math.floor(Math.random() * fighter.specialItem.length)];  
  }
  if (myClass === 'Druid') {
    var newCharSpecialItem = druid.specialItem[Math.floor(Math.random() * druid.specialItem.length)];  
  }
  if (myClass === 'Monk') {
    var newCharSpecialItem = monk.specialItem[Math.floor(Math.random() * monk.specialItem.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharSpecialItem = paladin.specialItem[Math.floor(Math.random() * paladin.specialItem.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharSpecialItem = ranger.specialItem[Math.floor(Math.random() * ranger.specialItem.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharSpecialItem = rogue.specialItem[Math.floor(Math.random() * rogue.specialItem.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharSpecialItem = warlock.specialItem[Math.floor(Math.random() * warlock.specialItem.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharSpecialItem = sorcerer.specialItem[Math.floor(Math.random() * sorcerer.specialItem.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharSpecialItem = wizard.specialItem[Math.floor(Math.random() * wizard.specialItem.length)];  
  }
    return newCharSpecialItem;
};

let mySpecialItem = createCharSpecialItem();

/*//////////////////////////////////////////////////////////////
              CREATE CHARACTER FEET ITEM
//////////////////////////////////////////////////////////////*/

const createCharItemFeet = newCharItemFeet => {
  if (myClass === 'Artificer') {
    var newCharItemFeet = artificer.itemFeet[Math.floor(Math.random() * artificer.itemFeet.length)];  
  }
  if (myClass === 'Barbarian') {
    var newCharItemFeet = barbarian.itemFeet[Math.floor(Math.random() * barbarian.itemFeet.length)];  
  }
  if (myClass === 'Bard') {
    var newCharItemFeet = bard.itemFeet[Math.floor(Math.random() * bard.itemFeet.length)];  
  }
  if (myClass === 'Cleric') {
    var newCharItemFeet = cleric.itemFeet[Math.floor(Math.random() * cleric.itemFeet.length)];  
  }
  if (myClass === 'Fighter') {
    var newCharItemFeet = fighter.itemFeet[Math.floor(Math.random() * fighter.itemFeet.length)];  
  }
  if (myClass === 'Druid') {
    var newCharItemFeet = druid.itemFeet[Math.floor(Math.random() * druid.itemFeet.length)];  
  }
  if (myClass === 'Monk') {
    var newCharItemFeet = monk.itemFeet[Math.floor(Math.random() * monk.itemFeet.length)];  
  }
  if (myClass === 'Paladin') {
    var newCharItemFeet = paladin.itemFeet[Math.floor(Math.random() * paladin.itemFeet.length)];  
  }
  if (myClass === 'Ranger') {
    var newCharItemFeet = ranger.itemFeet[Math.floor(Math.random() * ranger.itemFeet.length)];  
  }
  if (myClass === 'Rogue') {
    var newCharItemFeet = rogue.itemFeet[Math.floor(Math.random() * rogue.itemFeet.length)];  
  }
  if (myClass === 'Warlock') {
    var newCharItemFeet = warlock.itemFeet[Math.floor(Math.random() * warlock.itemFeet.length)];  
  }
  if (myClass === 'Sorcerer') {
    var newCharItemFeet = sorcerer.itemFeet[Math.floor(Math.random() * sorcerer.itemFeet.length)];  
  }
  if (myClass === 'Wizard') {
    var newCharItemFeet = wizard.itemFeet[Math.floor(Math.random() * wizard.itemFeet.length)];  
  }
    return newCharItemFeet;
};

let myItemFeet = createCharItemFeet();

console.log(myRace);
console.log(myClass);
console.log(myItemHead);
console.log(myItemBody);
console.log(myMainHand);
console.log(mySecondHand);
console.log(mySpecialItem);
console.log(myItemFeet);