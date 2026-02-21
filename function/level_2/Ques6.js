// Make a function, which return a value of specific key from object
function getValue(obj, key){
    return obj[key] //Mridula
}
let user = {
   name: "Mridula",
   age: 25
}
console.log(user)
console.log(getValue(user, "name"))