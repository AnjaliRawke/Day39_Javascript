let arr = [];
for(let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 900) + 100);
}
console.log("Generated array: ", arr);

let largest = -Infinity;
let secondLargest = -Infinity;
let smallest = Infinity;
let secondSmallest = Infinity;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if(arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }

  if(arr[i] < smallest) {
    secondSmallest = smallest;
    smallest = arr[i];
  } else if(arr[i] < secondSmallest && arr[i] !== smallest) {
    secondSmallest = arr[i];
  }
}

console.log("2nd largest element: ", secondLargest);
console.log("2nd smallest element: ", secondSmallest);
