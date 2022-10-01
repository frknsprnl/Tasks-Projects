const circle = require("./circle.js");

const r = 5;
const area = circle.circleArea(r).toFixed(2);
const circumference = circle.circleCircumference(r).toFixed(2);

console.log(`Area: ${area} \nCircumference: ${circumference}`);
