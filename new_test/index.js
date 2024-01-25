let array = [42, 67, 3, 23, 14];

array.sort((a, b) => (
    a % 2 ? b % 2 ? a - b : -1 : b % 2 ? 1 : a - b
    ));

console.log(array);

const firstCheck = false;
const secondCheck = false;
const access = firstCheck ? "Доступ запрещён" : secondCheck ? "Доступ запрещён" : "Доступ разрешён";

console.log(access); // выводит в консоль "Доступ разрешён"


const array2 = [42, 67, 3, 23, 14]; 
array2.sort((a, b) => {
    const aIsOdd = a % 2; 
    const bIsOdd = b % 2; 
    if (aIsOdd) {
        return bIsOdd ? a - b : -1; 
}
    return bIsOdd ? 1 : a - b; 
});
console.log(array); // [3, 23, 67, 14, 42]