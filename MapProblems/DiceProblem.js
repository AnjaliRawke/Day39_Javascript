let dieRollDict = new Map();

let maxCount = 0; 
let minCount = Infinity; 
let maxRoll = null;
let minRoll = null; 

while (true) {
  let roll = Math.floor(Math.random() * 6) + 1; 
  console.log("Die roll result: " + roll);

  if (dieRollDict.has(roll)) { 
    let count = dieRollDict.get(roll);
    count++; 
    dieRollDict.set(roll, count); 
  } else { 
    dieRollDict.set(roll, 1); // add the result to the Map with count 1
  }

  if (dieRollDict.get(roll) === 10) { 
    break; 
  }
}

// loop through the Map to find the die roll with maximum and minimum counts
for (let [roll, count] of dieRollDict) {
  if (count > maxCount) {
    maxCount = count;
    maxRoll = roll;
  }

  if (count < minCount) {
    minCount = count;
    minRoll = roll;
  }
}

console.log("Die roll results: " + [...dieRollDict]); 
console.log("Die roll with maximum count: " + maxRoll + " (count: " + maxCount + ")");
console.log("Die roll with minimum count: " + minRoll + " (count: " + minCount + ")");
