let player = { name: "Junior", victory: 2222, defeat: 666 };

function getRankedBalance(victory, defeat) {
  return victory - defeat;
}

function getLevelName(player) {
  let v = player.victory;
  if (v < 10) return "Ferro";
  if (v < 21) return "Bronze";
  if (v < 51) return "Prata";
  if (v < 81) return "Ouro";
  if (v < 91) return "Diamante";
  if (v < 101) return "Lendário";
  else return "Imortal";
}

let balance = getRankedBalance(player.victory, player.defeat);
let level = getLevelName(player)
console.log(`O Herói tem de saldo ${balance} e está no nível ${level}`);
