function findTriplets(arr) {
    let n = arr.length;
    let found = false;
    
    // Sorting the array
    arr.sort(function(a, b) {
      return a - b;
    });
    
    for (let i = 0; i < n - 2; i++) {
      let l = i + 1;
      let r = n - 1;
      let x = arr[i];
      while (l < r) {
        if (x + arr[l] + arr[r] == 0) {
          console.log("Triplet found: " ,x, arr[l], arr[r]);
          found = true;
          l++;
          r--;
        } else if (x + arr[l] + arr[r] < 0) {
          l++;
        } else {
          r--;
        }
      }
    }
    
    // If no triplet with 0 sum found in array
    if (found === false) {
      console.log("No triplets found.");
    }
  }
  
  let arr = [0, -1, 2, -3, 1];
  findTriplets(arr);
  