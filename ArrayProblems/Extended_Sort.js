let numbers = [];
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 900) + 100; 
  numbers.push(num); 
}

numbers.sort((a, b) => a - b);

// Find the 2nd smallest and 2nd largest elements
let secondSmallest = numbers[1];
let secondLargest = numbers[numbers.length - 2];

console.log("Array of random 3-digit numbers: " + numbers);
console.log("Second smallest element: " + secondSmallest);
console.log("Second largest element: " + secondLargest);
