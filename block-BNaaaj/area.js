function square(side) {
  return side * side;
}
function rectangle(l, b) {
  return l * b;
}
function circle(rad) {
  return 2 * Math.PI * rad;
}

module.exports = {
  square: square,
  rectangle: rectangle,
  circle: circle,
};
