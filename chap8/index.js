//decodeUri() и encodeUri()
let uri = "https://www.example.com/submit?name=maaike van putten"; 
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri); 
let decoded_uri = decodeURI(encoded_uri); 
console.log("Decoded:", decoded_uri);

//map

let arrForMap = [1, 2, 3, 4, 5]

let mapArr = arrForMap.map(m => m + 1)

console.log(mapArr);