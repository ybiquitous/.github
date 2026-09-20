import test, { before } from "node:test";

test("snapshot", (t) => {
  t.assert.snapshot({ value: 1 });
});
