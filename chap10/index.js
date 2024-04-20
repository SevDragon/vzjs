/* console.dir(document.body);

console.dir(
  document.body.children.forest.children.tree2.children.shrubbery.children
    .treasure
); */

console.dir(
  document.body.childNodes[1].childNodes[3].childNodes[1].childNodes[1]
);

console.log(
  document.body.children.forest.children.tree2.children.shrubbery.children
    .treasure
);
console.dir(document.body.children.forest.children.tree2.parentElement);

console.log(
  document.body.children.forest.children.tree2.previousElementSibling
);

console.log(document.body.children.forest.children.tree1.nextElementSibling);
console.log(document.body.children.forest.children.tree1.nextSibling);
