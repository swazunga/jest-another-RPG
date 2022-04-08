class Character {
  constructor() {}

  isAlive() {
    if (this.health === 0) {
      return false;
    }
    return true;
  }

  getHealth() {
    return `${this.name}'s health is now ${this.health}!`;
  }

  getAttackValue() {
    const min = this.strength - 5;
    const max = this.strength + 5;

    return Math.floor(Math.random() * (max - min) + min);
  }

  reduceHealth = function (health) {
    this.health -= health;

    if (this.health < 0) {
      this.health = 0;
    }
  };
}

console.log(new Character().getHealth());

module.exports = Character;
