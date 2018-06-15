const babylon = require("babylon");
const generate = require("babel-generator").default;

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

const rs = generate(ast, {}, code);


console.log(rs);