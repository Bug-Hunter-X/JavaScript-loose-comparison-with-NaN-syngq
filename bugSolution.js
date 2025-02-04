function foo(a, b) {
  return Object.is(a, b);
}

console.log(foo(NaN, NaN)); // Outputs: true
console.log(foo(1,1)); //Outputs: true
console.log(foo(1,"1")); //Outputs: false