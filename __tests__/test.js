var timesTwo = require("../code.js").timesTwo;
var dividedByTen = require("../code.js").dividedByTen;
var reverseArray = require("../code.js").reverseArray;

test("The timesTwo function", () => {
  expect(timesTwo(2)).toBe(4);
});

test("The dividedByTen function", () => {
  expect(dividedByTen(100)).toBe(10);
});

test("The reverseArray function", () => {
  expect(reverseArray(["f", "r", "a", "n", "k"])).toEqual(["k", "n", "a", "r", "f"]);
});
