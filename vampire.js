class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(littleVampire) {
    this.offspring.push(littleVampire);
    littleVampire.creator = this;
  }

    // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length
  }

    // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while(currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

    // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let thisBranches = this.numberOfVampiresFromOriginal;
    let inputBranches = vampire.numberOfVampiresFromOriginal;

    if (thisBranches < inputBranches) {
      return true;
    } else {
    return false;
    }
  }
};


module.exports = Vampire;

