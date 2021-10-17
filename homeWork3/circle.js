const circleArea = (radius) => {
  let result = Math.PI * Math.pow(radius, 2);
  console.log("Dairenin Alanı : "+result);
};

const circleCircumference = (radius) => {
  let result = 2 * Math.PI * radius;
  console.log("Dairenin Çevresi : "+result);
};

module.exports = { circleArea, circleCircumference };
