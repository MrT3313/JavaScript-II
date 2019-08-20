// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const foo = 'bar';
function returnFoo() {
  return foo;
}
console.log(foo)

// ==== Challenge 2: Create a counter function ====

// Good Explanation: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

function createCounter() {
  let counter = 0
  // - V1 - //
    // const myFunction = function() {
  // - V2 - //
    const myFunction = () => {

    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

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
