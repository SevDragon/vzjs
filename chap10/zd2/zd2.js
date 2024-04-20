let addNew = document.getElementById("addNew");

addNew.onclick = function () {

    addOne();
}


function addOne() {

    let valueOfInput = document.getElementById("addItem").value;
    let li = document.createElement("li");
    //li.innerHTML = `<p>${valueOfInput}</p>`;
    li.appendChild(document.createTextNode(valueOfInput));
    document.getElementById("sList").appendChild(li);
}