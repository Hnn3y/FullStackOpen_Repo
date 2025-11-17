# React Lesson Notes — Component State & Event Handlers

## Overview
This document explains React’s key concepts:
- Component state management
- Event handling
- Component re-rendering
- Passing props
- Helper functions
- Destructuring
- Refactoring for cleaner code

---

## 1. Basic Component Example

```jsx
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
```

## 2. Component Helper 

```jsx
const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

Functions can be nested inside components.

Helper functions can access props directly.

Function-in-function definitions are common in JavaScript.

## 3. Destructuring Props

Instead of repeatedly writing props.name or props.age, we can destructure:
```jsx
const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
} 
```


Destructuring simplifies code and improves readability.

## 4. Page Re-rendering Example
```jsx
import ReactDOM from 'react-dom/client'
import App from './App'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(<App counter={counter} />)
}

refresh()
counter += 1
refresh()
counter += 1
refresh()


You can use setInterval() for continuous updates:

setInterval(() => {
  refresh()
  counter += 1
}, 1000)
```

However, re-rendering manually is not ideal. React provides state hooks to handle this better.

## 5. Stateful Component (using useState)
```jsx
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(() => setCounter(counter + 1), 1000)

  return <div>{counter}</div>
}

export default App


useState(0) initializes state to 0.

setCounter() updates state and triggers a re-render.

Every update re-executes the component function.

Debug Tip:

console.log('rendering...', counter)
```


Use console.log to trace component behavior.

## 6. Event Handling

Adding a button to increase the counter:
```jsx
const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => console.log('clicked')

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>plus</button>
    </div>
  )
}
```

Or more directly:
```jsx
<button onClick={() => setCounter(counter + 1)}>plus</button>
```

Add reset functionality:
```jsx
<button onClick={() => setCounter(0)}>zero</button>
```

## 7. Correct Event Handler Usage

❌ Wrong (immediate call on render):
```jsx
<button onClick={setCounter(counter + 1)}>plus</button>
```

✅ Correct:
```jsx
<button onClick={() => setCounter(counter + 1)}>plus</button>
```

React expects a function reference, not a function call.

## 8. Separating Event Handlers
```jsx

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}
```

This improves code clarity and maintainability.

## 9. Passing State to Child Components
```jsx

Display Component:

const Display = ({ counter }) => <div>{counter}</div>


App Component:

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  )
}
```


State is lifted up to the parent (App) and passed down as props.

## 10. Reusable Button Component
```jsx

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)


App with multiple buttons:

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}
```

## 11. How Re-rendering Works

The App component initializes with counter = 0.

Clicking any button calls its respective event handler.

The event handler updates state via setCounter.

React detects state change → re-renders App.

Updated props are passed to Display and Button components.

Debug Example:
```jsx

console.log('rendering with counter value', counter)
```

## 12. Refactoring Components
```jsx

Display (simplified):

const Display = ({ counter }) => <div>{counter}</div>


Button (simplified):

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
```

- Key Takeaways

Components can contain logic through helper functions.

Destructuring simplifies prop usage.

State (useState) allows components to change dynamically.

Event handlers trigger state updates and re-renders.

Props pass data and functions between components.

Clean, small components are more reusable and maintainable.

Always use console.log to observe behavior rather than guessing.