const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../server');

test('GET /status returns 200 and {status:"ok"}', async () => {
  const server = createServer();
  await new Promise((r) => server.listen(0, r));
  try {
    const res = await fetch(`http://127.0.0.1:${server.address().port}/status`);
    assert.strictEqual(res.status, 200);
    assert.match(res.headers.get('content-type'), /application\/json/);
    assert.deepStrictEqual(await res.json(), { status: 'ok' });
  } finally {
    server.close();
  }
});

test('unknown route returns 404', async () => {
  const server = createServer();
  await new Promise((r) => server.listen(0, r));
  try {
    const res = await fetch(`http://127.0.0.1:${server.address().port}/nope`);
    assert.strictEqual(res.status, 404);
  } finally {
    server.close();
  }
});
