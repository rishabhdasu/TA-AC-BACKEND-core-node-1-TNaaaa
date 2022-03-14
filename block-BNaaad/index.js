console.log("Welcome to Node JS");

function sum() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sum());
