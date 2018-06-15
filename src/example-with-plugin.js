const code = ` foo === bar; `;
const babel = require('babel-core');
const ast = babel.transform(code, {
  plugins: [
    [
      require('./my-first-babel-plugin'),
      {
        debug: true,
      },
    ],
  ],
});
console.log(ast.code);