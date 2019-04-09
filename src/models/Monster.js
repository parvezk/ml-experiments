class Monster {
    constructor(name, health, speed) {
      this.name = name;
      this.health = health;
      this.speed = speed;
    }
    // getter
    get isAlive() {
      return this['health'] > 0;
    }
    // setter
    set isAlive(alive) {
      if(!alive) this['health'] = 0;
    }
    // method
    static attack(target) {
      console.log(this.name + ' attacks ' + 'target.name');
    }
  }
  export default Monster;