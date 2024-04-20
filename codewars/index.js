let arr = [1, 2, 3, 4, 6, 7, 8];

function firstNonConsecutive(arr) {
  console.log(arr.length - 1);
  for (let i = 0; i < arr.length -1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      console.log(arr, arr[i]);
      console.log(arr[i] + 1, arr[i + 1]);
      return arr[i + 1];
    }
  }
  return null;
}

console.log(firstNonConsecutive(arr));
