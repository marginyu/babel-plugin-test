const babylon = require("babylon");
const traverse =  require("babel-traverse").default;

const code = `function square(n) {
  return n * 2;
}`;

const ast = babylon.parse(code);

traverse(ast, {
  enter(path) {
    if (
      path.node.type === "Identifier" &&
      path.node.name === "n"
    ) {
      console.log('x found');
      path.node.name = "x";
    }
  }
});
