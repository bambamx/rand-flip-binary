function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  if(n === undefined) throw new Error("n is required");
  if(n <= 0) throw new Error("n must be greater than 0");
  if(n > 1000000) throw new Error("n must be lower than 1,000,000");

  // No need to further calculations
  if(n === 1) return 0;

  // Returns a string of random 0s and 1s with length m
  function randomBinary(m){
    binary = "";
    for (var i=0; i<m; i++) {
      binary+= flip()? "1" : "0";
    }
    return binary;
  }

  // Get the maximum posible value as binary;
  var maxPosibleValue = n-1;

  // Calculate the minimal length to express as binary
  // the maximum posible value
  var k = maxPosibleValue.toString(2).length;

  var r;
  do {
    // Get a random number
    r = parseInt(randomBinary(k), 2);
    // and check if meets the maximum posible value
  } while (r > maxPosibleValue);

  return r;
}

console.log(randomNumber(500)); // returns 123

console.log(randomNumber(1)); // returns 0

console.log(randomNumber(500)); // returns 466

console.log(randomNumber(1000001)); // throw error
