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
                 CREATE CHARACTER ITEMS
//////////////////////////////////////////////////////////////*/

function createCharItems() {
  if (myClass === 'Artificer') {
    var newArtificer = {
      head: artificer.itemHead[Math.floor(Math.random() * artificer.itemHead.length)],
      body: artificer.itemBody[Math.floor(Math.random() * artificer.itemBody.length)],
      primary: artificer.mainHand[Math.floor(Math.random() * artificer.mainHand.length)],
      secondary: artificer.secondHand[Math.floor(Math.random() * artificer.secondHand.length)],
      accessory: artificer.specialItem[Math.floor(Math.random() * artificer.specialItem.length)],
      feet: artificer.itemFeet[Math.floor(Math.random() * artificer.itemFeet.length)],
    }
    return newArtificer;
  };
  if (myClass === 'Barbarian') {
    var newBarbarian = {
      head: barbarian.itemHead[Math.floor(Math.random() * barbarian.itemHead.length)],
      body: barbarian.itemBody[Math.floor(Math.random() * barbarian.itemBody.length)],
      primary: barbarian.mainHand[Math.floor(Math.random() * barbarian.mainHand.length)],
      secondary: barbarian.secondHand[Math.floor(Math.random() * barbarian.secondHand.length)],
      accessory: barbarian.specialItem[Math.floor(Math.random() * barbarian.specialItem.length)],
      feet: barbarian.itemFeet[Math.floor(Math.random() * barbarian.itemFeet.length)],
    }
    return newBarbarian;
  };
  if (myClass === 'Bard') {
    var newBard = {
      head: bard.itemHead[Math.floor(Math.random() * bard.itemHead.length)],
      body: bard.itemBody[Math.floor(Math.random() * bard.itemBody.length)],
      primary: bard.mainHand[Math.floor(Math.random() * bard.mainHand.length)],
      secondary: bard.secondHand[Math.floor(Math.random() * bard.secondHand.length)],
      accessory: bard.specialItem[Math.floor(Math.random() * bard.specialItem.length)],
      feet: bard.itemFeet[Math.floor(Math.random() * bard.itemFeet.length)],
    }
    return newBard;
  };
  if (myClass === 'Cleric') {
    var newCleric = {
      head: cleric.itemHead[Math.floor(Math.random() * cleric.itemHead.length)],
      body: cleric.itemBody[Math.floor(Math.random() * cleric.itemBody.length)],
      primary: cleric.mainHand[Math.floor(Math.random() * cleric.mainHand.length)],
      secondary: cleric.secondHand[Math.floor(Math.random() * cleric.secondHand.length)],
      accessory: cleric.specialItem[Math.floor(Math.random() * cleric.specialItem.length)],
      feet: cleric.itemFeet[Math.floor(Math.random() * cleric.itemFeet.length)],
    }
    return newCleric;
  };
  if (myClass === 'Druid') {
    var newDruid = {
      head: druid.itemHead[Math.floor(Math.random() * druid.itemHead.length)],
      body: druid.itemBody[Math.floor(Math.random() * druid.itemBody.length)],
      primary: druid.mainHand[Math.floor(Math.random() * druid.mainHand.length)],
      secondary: druid.secondHand[Math.floor(Math.random() * druid.secondHand.length)],
      accessory: druid.specialItem[Math.floor(Math.random() * druid.specialItem.length)],
      feet: druid.itemFeet[Math.floor(Math.random() * druid.itemFeet.length)],
    }
    return newDruid;
  };
  if (myClass === 'Fighter') {
    var newFighter = {
      head: fighter.itemHead[Math.floor(Math.random() * fighter.itemHead.length)],
      body: fighter.itemBody[Math.floor(Math.random() * fighter.itemBody.length)],
      primary: fighter.mainHand[Math.floor(Math.random() * fighter.mainHand.length)],
      secondary: fighter.secondHand[Math.floor(Math.random() * fighter.secondHand.length)],
      accessory: fighter.specialItem[Math.floor(Math.random() * fighter.specialItem.length)],
      feet: fighter.itemFeet[Math.floor(Math.random() * fighter.itemFeet.length)],
    }
    return newFighter;
  };
  if (myClass === 'Monk') {
    var newMonk = {
      head: monk.itemHead[Math.floor(Math.random() * monk.itemHead.length)],
      body: monk.itemBody[Math.floor(Math.random() * monk.itemBody.length)],
      primary: monk.mainHand[Math.floor(Math.random() * monk.mainHand.length)],
      secondary: monk.secondHand[Math.floor(Math.random() * monk.secondHand.length)],
      accessory: monk.specialItem[Math.floor(Math.random() * monk.specialItem.length)],
      feet: monk.itemFeet[Math.floor(Math.random() * monk.itemFeet.length)],
    }
    return newMonk;
  };
  if (myClass === 'Paladin') {
    var newPaladin = {
      head: paladin.itemHead[Math.floor(Math.random() * paladin.itemHead.length)],
      body: paladin.itemBody[Math.floor(Math.random() * paladin.itemBody.length)],
      primary: paladin.mainHand[Math.floor(Math.random() * paladin.mainHand.length)],
      secondary: paladin.secondHand[Math.floor(Math.random() * paladin.secondHand.length)],
      accessory: paladin.specialItem[Math.floor(Math.random() * paladin.specialItem.length)],
      feet: paladin.itemFeet[Math.floor(Math.random() * paladin.itemFeet.length)],
    }
    return newPaladin;
  };
  if (myClass === 'Ranger') {
    var newRanger = {
      head: ranger.itemHead[Math.floor(Math.random() * ranger.itemHead.length)],
      body: ranger.itemBody[Math.floor(Math.random() * ranger.itemBody.length)],
      primary: ranger.mainHand[Math.floor(Math.random() * ranger.mainHand.length)],
      secondary: ranger.secondHand[Math.floor(Math.random() * ranger.secondHand.length)],
      accessory: ranger.specialItem[Math.floor(Math.random() * ranger.specialItem.length)],
      feet: ranger.itemFeet[Math.floor(Math.random() * ranger.itemFeet.length)],
    }
    return newRanger;
  };
  if (myClass === 'Rogue') {
    var newRogue = {
      head: rogue.itemHead[Math.floor(Math.random() * rogue.itemHead.length)],
      body: rogue.itemBody[Math.floor(Math.random() * rogue.itemBody.length)],
      primary: rogue.mainHand[Math.floor(Math.random() * rogue.mainHand.length)],
      secondary: rogue.secondHand[Math.floor(Math.random() * rogue.secondHand.length)],
      accessory: rogue.specialItem[Math.floor(Math.random() * rogue.specialItem.length)],
      feet: rogue.itemFeet[Math.floor(Math.random() * rogue.itemFeet.length)],
    }
    return newRogue;
  };    
  if (myClass === 'Warlock') {
    var newWarlock = {
      head: warlock.itemHead[Math.floor(Math.random() * warlock.itemHead.length)],
      body: warlock.itemBody[Math.floor(Math.random() * warlock.itemBody.length)],
      primary: warlock.mainHand[Math.floor(Math.random() * warlock.mainHand.length)],
      secondary: warlock.secondHand[Math.floor(Math.random() * warlock.secondHand.length)],
      accessory: warlock.specialItem[Math.floor(Math.random() * warlock.specialItem.length)],
      feet: warlock.itemFeet[Math.floor(Math.random() * warlock.itemFeet.length)],
    }
    return newWarlock;
  };
  if (myClass === 'Sorcerer') {
    var newSorcerer = {
      head: sorcerer.itemHead[Math.floor(Math.random() * sorcerer.itemHead.length)],
      body: sorcerer.itemBody[Math.floor(Math.random() * sorcerer.itemBody.length)],
      primary: sorcerer.mainHand[Math.floor(Math.random() * sorcerer.mainHand.length)],
      secondary: sorcerer.secondHand[Math.floor(Math.random() * sorcerer.secondHand.length)],
      accessory: sorcerer.specialItem[Math.floor(Math.random() * sorcerer.specialItem.length)],
      feet: sorcerer.itemFeet[Math.floor(Math.random() * sorcerer.itemFeet.length)],
    }
    return newSorcerer;
  };
  if (myClass === 'Wizard') {
    var newWizard = {
      head: wizard.itemHead[Math.floor(Math.random() * wizard.itemHead.length)],
      body: wizard.itemBody[Math.floor(Math.random() * wizard.itemBody.length)],
      primary: wizard.mainHand[Math.floor(Math.random() * wizard.mainHand.length)],
      secondary: wizard.secondHand[Math.floor(Math.random() * wizard.secondHand.length)],
      accessory: wizard.specialItem[Math.floor(Math.random() * wizard.specialItem.length)],
      feet: wizard.itemFeet[Math.floor(Math.random() * wizard.itemFeet.length)],
    }
    return newWizard;
  };    
}

let myItems = createCharItems();

console.log(myRace);
console.log(myClass);
console.log(myItems.head);
console.log(myItems.body);
console.log(myItems.primary);
console.log(myItems.secondary);
console.log(myItems.accessory);
console.log(myItems.feet);