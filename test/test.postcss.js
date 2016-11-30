import test from 'ava';
const fs = require('fs');
const postcss = require('postcss');
const plugin = require('../');


const tests = [
  {
    message: '02 => single-set becomes a double-set',
    opts: { quotes: 'double' },
    fixturePath: '02-single-set.css'
  }, {
    message: '03 => double-set becomes a single-set',
    opts: { quotes: 'single' },
    fixturePath: '03-double-set.css'
  }, {
    message: '05 => escaped',
    opts: { quotes: 'double' },
    fixturePath: '05-escaped.css'
  }

  // {
  //   message: '04 => mixed',
  //   opts: { quotes: 'double' },
  //   fixturePath: '04-mixed.css'
  // }
];

tests.map(v => test(v.message, t => {
  const fixture = fs.readFileSync(`./test/fixtures/fixtures.${v.fixturePath}`, 'utf-8').split('/* * EXPECTED * */\n');
  postcss(plugin(v.opts)).process(fixture[0]).then(({ css }) => {
    t.is(css, fixture[1]);
  });
}));
