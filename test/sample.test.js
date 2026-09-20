import test, { before } from "node:test";

test("snapshot", (t) => {
  if (t.assert.snapshot) {
    t.assert.snapshot({ value: 1 });
  } else {
    t.skip("Unsupported snapshots.");
  }
});
