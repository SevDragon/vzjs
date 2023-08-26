let randomNumber = Math.round(Math.random() * 6);
console.log(randomNumber);

let promtQuest = prompt("судьба");
let answer = "так то так";

switch (randomNumber) {
  case 0:
    answer = "ответ один";
    break;
  case 1:
    answer = "ответ два";
    break;
  case 2:
    answer = "ответ три";
    break;
  case 3:
    answer = "ответ четыре";
    break;
  case 4:
    answer = "ответ пять";
    break;
  case 5:
    answer = "ответ шесть";
    break;
  default:
    answer = "нету так то";
}

let output = `так то вопрос ${promtQuest} и ${answer}`;

console.log(output);
