const babel = require('babel-core');
const generate = require('babel-generator').default;
const result = babel.transformFileSync('/Users/marginyu/work/babel-plugin-test/xinba/demo1.js', {
  presets: [
    ["es2015", {"modules": false}],
    "stage-2",
    "react"
  ],
  plugins: [
    [
      require('./track'),
      {
        debug: true,
      },
    ],
  ],
});

const output = generate(result.ast, {  }, result.code);

/**
 result.code;
 result.map;
 result.ast;
 */
console.log(result.code);