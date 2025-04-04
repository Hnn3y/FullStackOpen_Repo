# FullStackOpen_Repo

## THIS IS A REPO FOR THE COURSES I AM TAKING ON FullStackOpen [LINK](https://fullstackopen.com/en/)

### REACT COURSE

### Javascript

#### NOTES

###### JavaScript Versions & Transpiling
ES15 is the latest standard (2024).

Browsers may not support new features; transpiling (e.g., with Babel) converts modern JS to older versions.

Vite + React handles transpiling automatically (explored later in the course).

Node.js runs modern JS without transpiling, using the Chrome V8 engine.

###### Running JavaScript
Save code in .js files and run with node filename.js.

You can also use Node.js console, browser dev tools, or tools like JS Bin.

##### Variables

const does not define a variable but a constant for which the value can no longer be changed. On the other hand, let defines a normal variable.

##### Arrays

Enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

push() → adds items.

forEach() → iterates over elements.

concat() → returns new array, used for immutability.

map() → transforms arrays (used often in React).

Destructuring allows easy variable assignment:
const [first, second, ...rest] = array



##### Objects

It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

Defined using object literals.

Values can be of any type (including nested objects).

Access via dot or bracket notation.

Add properties dynamically.

Methods and class syntax (from ES6) exist but aren't central to this course.

##### Functions

Prefer arrow functions:
const square = p => p * p

Traditional function declarations:

Named: function add(a, b) {...}

Anonymous: const avg = function(a, b) {...}