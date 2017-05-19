jest.useFakeTimers();
var timesTwo = require("../code.js").timesTwo;
var dividedByTen = require("../code.js").dividedByTen;
var reverseArray = require("../code.js").reverseArray;
var asyncFunction = require("../code.js").asyncFunction;
var aRandomNumber = require("../code.js").aRandomNumber;
var aReturnlessFunction = require("../code.js").aReturnlessFunction;


test("The timesTwo function", () => {
  expect(timesTwo(2)).toBe(4);
});

test("The dividedByTen function", () => {
  expect(dividedByTen(100)).toBe(10);
});

test("The reverseArray function", () => {
  expect(reverseArray(["f", "r", "a", "n", "k"])).toEqual(["k", "n", "a", "r", "f"]);
});


test("The asyncFunction function", () => {
  asyncFunction(1000);
  expect(setTimeout).toHaveBeenCalled();
  expect(setTimeout.mock.calls[0][1]).toBe(1000);
});

test("The aRandomNumber function", () => {
  expect(aRandomNumber()).toBeLessThan(11);
  expect(aRandomNumber()).toBeGreaterThanOrEqual(1);
  expect(typeof aRandomNumber()).toBe("number");
});

test("The aReturnlessFunction function", () => {
  expect(aReturnlessFunction()).toBeFalsy();
  expect(aReturnlessFunction()).toHaveBeenCalled();
});
