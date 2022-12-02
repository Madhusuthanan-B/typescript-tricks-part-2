// Approach 1 with additional properies

// class Player {
//   playerName: string;
//   constructor(name: string) {
//     this.playerName = name;
//   }
// }

// const playerOfArgentina = new Player('Messi');
// playerOfArgentina.name;
// playerOfArgentina.playerName;

// Approach 2 withut additional properies
class Player {
  constructor(public name: string) {}
}

const playerOfArgentina = new Player('Messi');
playerOfArgentina.name;
