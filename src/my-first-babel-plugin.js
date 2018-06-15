module.exports = function(babel) {
  let t = babel.types;
  return {
    visitor: {
      Identifier(path, state) {

      },
      BinaryExpression(path,state) {
        if (path.node.operator !== "===") {
          return;
        }
        path.node.left = t.identifier("sebmck");
        path.node.right = t.identifier("dork");
      }
    }
  };
};