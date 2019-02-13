// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer() {
  let a = 2;
  function inner() {
    let b = a * 2;
    return b
  }
  return inner() + a;
}

console.log(outer());


// ==== Challenge 2: Create a counter function ====
function makeFunc() {
  var count = 0;
  function countUp() {
    count ++;
    return count;
  }
  return countUp;
};

var myFunc = makeFunc();



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
