let outputDiv = document.querySelector("#output");
let outputDivAll = document.querySelector("#outputAll");
let searchInput = document.querySelector("#sText");
let replaceInput = document.querySelector("#rText");
let replaceBtn = document.querySelector("button");

replaceBtn.addEventListener("click", lookup);

function lookup() {
  let search = searchInput.value;
  let replace = replaceInput.value;
  let matchSerachRegEx = new RegExp(search, "gi");

  if (search.match(matchSerachRegEx)) {
    outputDiv.textContent = outputDiv.textContent.replace(
      matchSerachRegEx,
      replace
    );
  } else {
    return;
  }
  if (search.match(matchSerachRegEx)) {
    let matchContent = outputDivAll.textContent.match(matchSerachRegEx)
      ? replace
      : `not have: ${search.match(matchSerachRegEx)}`;
    console.log(matchContent);
    /* outputDivAll.textContent = outputDivAll.textContent.replace(
        matchSerachRegEx,
        replace
      ); */
    outputDivAll.textContent = matchContent;
  }
}
