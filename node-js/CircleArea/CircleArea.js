let arguments = process.argv.slice(2);

const calcArea = (r) => {
  const PI = Math.PI;
  const area = PI * r * r;
  console.log(`Area of Circle: ${area}`);
};

calcArea(arguments * 1);
