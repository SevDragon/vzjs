let emptyArr = []

let value = 10

for (let i = 0; i <= value; i++) {
    const temp = []
    for (let j = 0; j <= value; j++) {
        temp.push(i*j)
    }
    emptyArr.push(temp)
}

console.table(emptyArr);