// Ek function banao jo check kare object empty hai ya nahi.
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0; 
}

console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ a: 1 })); // false