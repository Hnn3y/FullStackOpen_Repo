// -VARIABLES
// In JavaScript there are a few ways to go about defining variables:

const x = 1
let y = 5

console.log(x, y)   // 1 5 are printed

y += 10
console.log(x, y)   // 1 15 are printed

y = 'sometext'
console.log(x, y)   // 1 sometext are printed
x = 4               // causes an error
// const variables cannot be reassigned, but let variables can
// var is also used to define variables, but it is not recommended in modern JavaScript

// -ARRAYS
// Arrays are used to store multiple values in a single variable
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
}) 
// Although a variable declared with const cannot be reassigned to a different value, the contents of the object it references can still be modified. This is because the const declaration ensures the immutability of the reference itself, not the data it points to
// One way of iterating through the items of the array is using forEach. forEach receives a function defined using the arrow syntax as a parameter.
// a new item was added to the array using the method push. In React code, it is preferable to use the method concat, which creates a new array with the added item. This ensures the original array remains unchanged.
const t = [1, -1, 3]

const t2 = t.concat(5)  // creates new array

console.log(t)  // [1, -1, 3] is printed
console.log(t2)  // [1, -1, 3, 5] is printed
// t.concat(5) does not add a new item to the old array but returns a new array which, besides containing the items of the old array, also contains the new item.
// Let's look at a short example of using the map method.
// Based on the old array, map creates a new array, for which the function given as a parameter is used to create the items.
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

// Map can also transform the array into something completely different:

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// Individual items of an array are easy to assign to variables with the help of the destructuring assignment.

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1 2 is printed
console.log(rest)          // [3, 4, 5] is printed