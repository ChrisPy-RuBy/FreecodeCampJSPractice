
function largestOfFour(arr) {
  var biggestNumbers = [];
  var biggestNumber = 1; 
  
  for (i=0; i<arr.length; i++) {
    for (j=0; j<arr.length; j++) {
      if (arr[i][j] > biggestNumber) {
        biggestNumber = arr[i][j];
      }
    }
    biggestNumbers.push(biggestNumber);
    biggestNumber = 0;
  }
  return biggestNumbers;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
