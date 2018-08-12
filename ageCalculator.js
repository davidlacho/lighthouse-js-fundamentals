// const ageCalculator = (name, yearOfBirth, currentYear) => {
//   return `${name} is ${currentYear-yearOfBirth} years old.`;
// }

function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Suzie", 1984, 2016));
