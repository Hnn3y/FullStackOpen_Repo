// > Variables: Storing Information
//Think of variables as labeled boxes:
javascriptconst x = 5      // A box labeled 'x' that CANNOT be changed
let y = 10       // A box labeled 'y' that CAN be changed

y = 20           // OK! We can put a new value in 'y'
x = 15           // ERROR! We can't change 'x'


// > Arrays: Lists of Things
Arrays are like shopping lists:
javascriptconst fruits = ['apple', 'banana', 'orange']

console.log(fruits[0])  // Gets first item: 'apple'
console.log(fruits[1])  // Gets second item: 'banana'

fruits.push('grape')    // Adds 'grape' to the end
Important methods:

.map() - Creates a new list by transforming each item
.forEach() - Does something with each item

javascriptconst numbers = [1, 2, 3]
const doubled = numbers.map(num => num * 2)
// doubled is now [2, 4, 6]


// > Objects: Grouping Related Information
Objects are like forms with labeled fields:
javascriptconst person = {
  name: 'John',
  age: 25,
  city: 'Lagos'
}

console.log(person.name)   // Gets 'John'
console.log(person.age)    // Gets 25


// > Functions: Reusable Actions
Functions do tasks for you:
javascript// Arrow function (modern way)
const add = (a, b) => {
  return a + b
}

// Shorter version (when you just return something)
const multiply = (a, b) => a * b

console.log(add(5, 3))       // 8
console.log(multiply(4, 2))  // 8