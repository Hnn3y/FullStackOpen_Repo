1. What is a Component?
A component is like a reusable building block for your website. Think of it like LEGO pieces!
javascriptconst Header = () => {
  return <h1>Welcome to my site</h1>
}
This Header component can be used anywhere in your app!

2. Using Components
You use components like HTML tags:
javascriptconst App = () => {
  return (
    <div>
      <Header />
      <Header />
      <Header />
    </div>
  )
}
This shows the header 3 times!

3. Props: Passing Data to Components
Props are like messages you send to components.
Example:
javascript// Component that RECEIVES data
const Hello = (props) => {
  return <p>Hello {props.name}</p>
}

// Component that SENDS data
const App = () => {
  return (
    <div>
      <Hello name="John" />
      <Hello name="Mary" />
    </div>
  )
}
```

**Output:**
```
Hello John
Hello Mary

4. Curly Braces {} - Using JavaScript in JSX
Inside your HTML-like code, use {} to run JavaScript:
javascriptconst App = () => {
  const name = "Peter"
  const age = 25

  return (
    <div>
      <p>My name is {name}</p>
      <p>I am {age} years old</p>
      <p>Next year I'll be {age + 1}</p>
    </div>
  )
}

5. Component Names MUST Start with Capital Letter
javascript// ✅ CORRECT
const Header = () => { ... }

// ❌ WRONG
const header = () => { ... }

6. Components Must Return ONE Root Element
javascript// ❌ WRONG - Two separate elements
const App = () => {
  return (
    <h1>Title</h1>
    <p>Text</p>
  )
}

// ✅ CORRECT - Wrapped in one div
const App = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Text</p>
    </div>
  )
}

// ✅ ALSO CORRECT - Using fragments <>
const App = () => {
  return (
    <>
      <h1>Title</h1>
      <p>Text</p>
    </>
  )
}