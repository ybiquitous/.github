import test, { before } from "node:test";
import process from "node:process";

const nodeVersion = process.versions.node;

test("snapshot", (t) => {
  if (/^(16|18)/.test(nodeVersion)) {
    t.skip(`Snapshot testing is unsupported in Node.js v${nodeVersion}.`);
    return;
  }

  t.assert.snapshot({ value: 1 });
});
