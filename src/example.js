const babylon = require("babylon");

const code = `function square(n) {
  return n * n;
}`;

let a = babylon.parse(code);

console.log(a);