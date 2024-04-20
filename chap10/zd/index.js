let NameArray = ["Chanti", "John", "Maxime", "Bobbi", "Jair"];

const message = document.getElementById("message");

build();

function build() {
  let html = `<h1>Friend name</h1><table>`;
  //addclick
  NameArray.forEach((i, x) => {
    html += `<tr class="box" data-row="${x + 1}" data-name="${i}" onclick="getData(this)"><td>${i}</td>`;
    html += `<td> ${x + 1}</td></tr>`;
  });
  html += "</table>";
  document.getElementById("output").innerHTML = html;
}

function getData(x) {

  let temp = x.getAttribute("data-row");
  let tempName = x.getAttribute("data-name");
  message.innerHTML = `Name: ${tempName} Row: ${temp}`;
}



