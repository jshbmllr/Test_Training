function timesTwo(number) {
  return number * 2;
}

function dividedByTen(number) {
  return number/10;
}

function reverseArray(array) {
  return array.reverse();
}

function asyncFunction(number) {
  setTimeout(() => {
    return "async";
  }, number);
}

function aReturnlessFunction() {
  console.log("I RETURN NOTHING!");
}

function aRandomNumber() {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}

module.exports.timesTwo = timesTwo;
module.exports.dividedByTen = dividedByTen;
module.exports.reverseArray = reverseArray;
module.exports.asyncFunction = asyncFunction;
module.exports.aReturnlessFunction = aReturnlessFunction;
module.exports.aRandomNumber = aRandomNumber;
