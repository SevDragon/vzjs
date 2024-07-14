//let dragEle = document.getElementById("dragme");

//dragEle.draggable = true;

let holderItem;

function dStart() {
  holderItem = event.target;
  //console.log(holderItem);
}

function nDrop() {
  event.preventDefault();
}

function dDrop() {
  event.preventDefault();
  if (event.target == document.getElementsByClassName("box")[0]) {
    document.getElementsByClassName("box")[0].style.backgroundColor = "green";
    document.getElementsByClassName("box")[1].style.backgroundColor = "blue";
    event.target.appendChild(holderItem);
  } else if (event.target == document.getElementsByClassName("box")[1]) {
    document.getElementsByClassName("box")[0].style.backgroundColor = "purple";
    document.getElementsByClassName("box")[1].style.backgroundColor = "yellow";
   event.target.appendChild(holderItem);
  }
}
