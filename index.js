// index.js

// Function expression for divide
const divide = function() {
  return 2000 / 100;
};

// Arrow function for square
const square = (x) => {
  return x * x;
};

// Arrow function for add
const add = (a, b) => {
  return a + b;
};

// Exporting functions if needed (for testing purposes)
module.exports = { divide, square, add };
