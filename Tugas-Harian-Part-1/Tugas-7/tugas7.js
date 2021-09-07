// soal 1
// release 0
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name;
  }

  get legs() {
    return this._legs;
  }

  set legs(x) {
    this._legs = x;
  }

  get cold_blooded() {
    return this._cold_blooded;
  }
}
var sheep = new Animal("shaun");

console.log("--- Soal 1 ---");
console.log("--- Release 0 ---");
console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false
sheep.legs = 3;
console.log(sheep.legs);

// release 1
class Ape extends Animal {
  constructor(_name) {
    super(_name);
    this._legs = 2;
  }

  yell() {
    return console.log("Auooo");
  }
}

class Frog extends Animal {
  constructor(_name) {
    super(_name);
  }

  jump() {
    return console.log("hop hop");
  }
}

console.log("--- Release 1 ---");
var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"
sungokong.legs = 2;
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);

// soal 2
class Clock {
  constructor({ template }) {
    this._template = template;
  }

  render = () => {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop = () => {
    clearInterval(timer);
  };

  start = () => {
    this.render();
    var timer = setInterval(this.render, 1000);
  };
}
console.log("--- Soal 2 ---");
var clock = new Clock({ template: "h:m:s" });
clock.start();
