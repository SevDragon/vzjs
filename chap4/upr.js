let logicVar = false;

console.log(logicVar);

if (logicVar) {
  console.log("bro true");
} else {
  console.log("bro false");
}

if (!logicVar) {
  console.log(`bro is !${logicVar}`);
}

console.log();

/* let promtQuest = Number(prompt("age"));

let prontMessage = ``;

if (promtQuest <= 18) {
  prontMessage = `need 18 < you ${promtQuest} not ok`;
} else if (promtQuest >= 18) {
  prontMessage = `need 18 > you ${promtQuest} ok`;
} else {
  prontMessage = `need number`;
}

console.log(prontMessage);

console.log();

let IDter = true;

let messageId = IDter ? "true" : "fasle";

console.log(messageId);

console.log();

let prize = Number(prompt("0 - 10"));

let message;

switch (prize) {
  case 0:
    message = `you chose ${prize} you prize Gold`;
    break;
  case 1:
    message = `you chose ${prize} you prize Gold 1`;
    break;
  case 2:
    message = `you chose ${prize} you prize Gold 2`;
    break;
  case 3:
  case 4:
    message = `you chose ${prize} you prize Gold 4`;
    break;
  case 5:
    message = `you chose ${prize} you prize Gold 5`;
    break;
  default:
    message = `bad chose ${prize}`;
}

console.log(message); */

let RPS = ["Rock", "Paper", "Scissors"];

let RPS_Number = Math.floor(Math.random() * 3);
let RPS_Number_PC = Math.floor(Math.random() * 3);
console.log(RPS);
if (RPS_Number === RPS_Number_PC) {
  console.log(
    `You: ${RPS[RPS_Number]} Number: ${RPS[RPS_Number]}, \nPC: ${RPS[RPS_Number_PC]} Number: ${RPS[RPS_Number_PC]}, \nTie`
  );
} else if (RPS_Number > RPS_Number_PC) {
  if (RPS_Number_PC == 0 && RPS_Number == 2) {
    console.log(
      `You: ${RPS[RPS_Number]} Number: ${RPS_Number}, \nPC: ${RPS[RPS_Number_PC]} Number: ${RPS_Number_PC} \nPC Win`
    );
  } else {
    console.log(
      `You: ${RPS[RPS_Number]} Number: ${RPS_Number}, \nPC: ${RPS[RPS_Number_PC]} Number: ${RPS_Number_PC} \nYou Win`
    );
  }
} else {
  if (RPS_Number_PC == 2 && RPS_Number == 0) {
    console.log(
      `You: ${RPS[RPS_Number]} Number: ${RPS_Number}, \nPC: ${RPS[RPS_Number_PC]} Number: ${RPS_Number_PC} \nYou Win`
    );
  } else {
    console.log(
      `You: ${RPS[RPS_Number]} Number: ${RPS_Number}, \nPC: ${RPS[RPS_Number_PC]} Number: ${RPS_Number_PC} \nPC Win`
    );
  }
}
