import test, { before } from "node:test";

test("snapshot", (t) => {
  if ('snapshot' in t.assert) {
    t.assert.snapshot({ value: 1 });
  } else {
    t.skip("Unsupported snapshots.");
  }
});
