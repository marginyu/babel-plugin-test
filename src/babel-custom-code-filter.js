module.exports = function(babel) {
  var t = babel.types;
  return {
    visitor: {
      VariableDeclarator: function(path, settings) {
        const node = path.node;
        if (node.id.name === 'a' && node.init.value === 1) {
          node.init.value = 'xiaomei';
        } else if (node.id.name === 'b' && node.init.value === 2) {
          node.init.value = 'hello';
        }
      }
    }
  };
};