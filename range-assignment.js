function range(start, end, step) {
  if (start === "undefined" || end === "undefined" || step === "undefined" || start > end || step < 0) {
    return [];
  }
  var nextNumber = start;
  var newArray = [];
  while (nextNumber <= end) {
    newArray.push(nextNumber)
    nextNumber = nextNumber + step;
  }
  return (newArray);
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
