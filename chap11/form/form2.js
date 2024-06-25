let q = window.location.search
console.log("window.location.search",q);
let params = new URLSearchParams(q)
let name = params.get("name")
console.log(name);

document.write(`<h1>${name}</h1>`)