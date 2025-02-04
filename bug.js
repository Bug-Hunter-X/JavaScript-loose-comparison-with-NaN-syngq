function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // Outputs: false

//Correct Implementation
function foo(a, b) {
  return Object.is(a, b);
}

console.log(foo(NaN, NaN)); //Outputs: true