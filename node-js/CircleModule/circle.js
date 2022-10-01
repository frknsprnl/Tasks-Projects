const PI = Math.PI;

const circleArea = (r) => {
  return PI * r * r;
};

const circleCircumference = (r) => {
  return 2 * PI * r;
};

module.exports = {
  circleArea,
  circleCircumference,
};
