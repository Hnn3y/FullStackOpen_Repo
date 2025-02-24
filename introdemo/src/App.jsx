const App = () => {
  const now = new Date()
  const a = 10
  const b = 40
  console.log(now, a+b)

  const name = 'Peter'
  const age = 10





  return (
    <div>
      <p>Hello world</p>
      <h1>Greetings</h1>
      <Hello name = "Henneiy" age={26+5}/>
      <Hello name = "Simon" age={20+10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}
const Hello = (props) => {
  return (
    <div>
      <p>
       <h1> Hello {props.name}, you are {props.age} years old</h1>
        </p>
    </div>
  )
}

export default App