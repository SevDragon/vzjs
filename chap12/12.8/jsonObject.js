let myList = [
  {
    name: "Learn JavaScript",
    status: true,
  },
  {
    name: "Try JSON",
    status: false,
  },
];

reloader();
function reloader() {
  myList.forEach((el) => {
    console.log(`${el.name} = ${el.status}`);
  });
}
console.log("-----------------");

let company = {
  companies: [
    {
      name: "JavaScript Code Dojo",
      addresses: [
        {
          street: "123 Main street",
          zipcode: 12345,
          city: "Scott",
        },
        {
          street: "123 Side street",
          zipcode: 35401,
          city: "Tuscaloosa",
        },
      ],
    },
    {
      name: "Python Code Dojo",
      addresses: [
        {
          street: "123 Party street",
          zipcode: 68863,
          city: "Nebraska",
        },
        {
          street: "123 Monty street",
          zipcode: 33306,
          city: "Florida",
        },
      ],
    },
  ],
};
console.log(`Name: ${company.companies[0].name}`);
company.companies[0].addresses.forEach((el, index) => {
  //console.log(el, index);
  
  console.log();
  console.log(`Street: ${el.street}`);
  console.log(`Zipcode: ${el.zipcode}`);
  console.log(`City: ${el.city}`);
});

console.log();
console.log(`Name: ${company.companies[1].name}`);
company.companies[1].addresses.forEach((el, index) => {
  //console.log(el, index);
  
  console.log();

  console.log(`Street: ${el.street}`);
  console.log(`Zipcode: ${el.zipcode}`);
  console.log(`City: ${el.city}`);
 
  
});

console.log("-----------------");

company.companies.forEach((el, index) => {
  console.log(`Name: ${el.name}`);
  console.log();
  
  el.addresses.forEach((el, index) => {
    console.log(`Street: ${el.street}`);
    console.log(`Zipcode: ${el.zipcode}`);
    console.log(`City: ${el.city}`);
    console.log();
  });
  
  
})