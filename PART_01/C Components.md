1. Components and Props

A component in React is just a function that returns UI (usually written in JSX).

Example:

const Hello = (props) => {
  return <p>Hello {props.name}, you are {props.age} years old</p>
}


props means properties — it’s how you pass data into a component.

When using it:

<Hello name="Maya" age={26} />


The component gets:

props = { name: "Maya", age: 26 }

 2. Helper Functions Inside Components

You can define functions inside your components to do calculations or logic.

Example:

const Hello = (props) => {
  const bornYear = () => new Date().getFullYear() - props.age

  return (
    <div>
      <p>Hello {props.name}</p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}


That function bornYear() can use anything inside props directly.

 3. Destructuring

Instead of typing props.name every time, you can “unpack” it easily:

const Hello = ({ name, age }) => {
  return <p>Hello {name}, you are {age}</p>
}


That’s called destructuring — it makes code cleaner.

 4. Re-rendering and State

React components re-render automatically when their state changes.

Use the useState hook:

import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return <div>{counter}</div>
}


counter → current value

setCounter → function to update it

Example: increase it every second:

setTimeout(() => setCounter(counter + 1), 1000)


Whenever setCounter() runs → React re-renders the component with the new value.

 5. Event Handlers

To make UI interactive (like buttons), use event handlers.

<button onClick={() => setCounter(counter + 1)}>plus</button>


The onClick attribute expects a function, not a function call.

Wrong ❌ onClick={setCounter(counter + 1)}

Right ✅ onClick={() => setCounter(counter + 1)}

You can also define them separately:

const increaseByOne = () => setCounter(counter + 1)
const setToZero = () => setCounter(0)


Then use:

<button onClick={increaseByOne}>plus</button>
<button onClick={setToZero}>zero</button>

 6. Passing State to Child Components

You can pass the counter value or functions as props to smaller components.

Example:

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}


Now your app has 3 reusable components:

Display → shows the number

Button → clickable buttons

App → parent that holds the state

>>💡 Summary (Simplified)
Concept	Meaning
props	Pass data to a component
useState()	Create a state variable
setState()	Change state → re-render
onClick	Handles user clicks
Destructuring	Cleaner way to access props
Reusable Components	Split logic/UI into smaller parts