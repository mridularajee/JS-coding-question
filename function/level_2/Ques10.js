// Ek function banao jo array of objects me se particular property match kare.
function findByProperty(arr, key, value) {
  return arr.find(item => item[key] === value);
}

const users = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Riya" }
];

console.log(findByProperty(users, "id", 2));
// { id: 2, name: "Riya" }