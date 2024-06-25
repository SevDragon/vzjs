// inputs
let outputDiv = document.querySelector(".output");
let inputText = document.querySelector("input[name='message']");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btnLog = document.querySelector(".btn3");
let LogArr = [];

let textP = document.querySelector(".textP");

//logic

btn1.addEventListener("click", foksObject);
btn2.addEventListener("click", foksObject);

btnLog.addEventListener("click", (e) => {
  LogArr.forEach((el) => {
    /* textP.innerHTML += `<ul>
    <li>Message: ${el.inputMessage}</li> 
    <li>Type: ${el.buttonType}</li> 
    <li>Class: ${el.buttonClass}</li>
    <li>Tag: ${el.buttonTagName}</li>
</ul>`; */
    textP.innerHTML =
      textP.innerHTML +
      `<ul>
        <li>Message: ${el.inputMessage}</li> 
        <li>Type: ${el.buttonType}</li> 
        <li>Class: ${el.buttonClass}</li>
        <li>Tag: ${el.buttonTagName}</li>
    </ul>`;
  });

  console.log(LogArr);
});

function foksObject(e) {
  outputDiv.textContent += ` ${inputText.value}`;

  const targetEvent = e.target;
  console.log(targetEvent.type);

  let objTemp = {
    inputMessage: inputText.value,
    buttonType: targetEvent.type,
    buttonClass: targetEvent.className,
    buttonTagName: targetEvent.tagName,
  };

  LogArr.push(objTemp);
  inputText.value = "";
}
