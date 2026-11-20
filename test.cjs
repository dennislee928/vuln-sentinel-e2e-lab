const assert = require('node:assert/strict');
const { test } = require('node:test');
const parse = require('minimist');

test('parses trusted command-line arguments before and after the upgrade', () => {
  assert.deepEqual(parse(['--name', 'sentinel', '--count', '3']), {
    _: [], name: 'sentinel', count: 3,
  });
});
