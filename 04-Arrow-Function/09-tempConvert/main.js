// farenheit => celsius
// C = (F-32)/1.8

const tempConvert = (tempF) => (tempF - 32)/1.8;

console.log(`Celsius degree = ${tempConvert(100)}`);