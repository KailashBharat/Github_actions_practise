const assert = require("assert");
const {add, sub} = require("./index.js")

describe("Testing bizz", () => {
  it("should test the add function", () => {
    assert.equal(add(2, 2), 4);
  });
  it("should test the sub function", () => {
    assert.equal(sub(2, 2), 0);
  });
});

describe("Testing bizz", () => {
  it("should test the add function", () => {
    assert.equal(add(2, 2), 4);
  });
  it("should test the sub function", () => {
    assert.equal(sub(2, 2), 0);
  });
});

describe("Testing bizz", () => {
  it("should test the add function", () => {
    assert.equal(add(2, 2), 4);
  });
  it("should test the add function", () => {
    assert.equal(add(3, 2), 4);
  });
});
