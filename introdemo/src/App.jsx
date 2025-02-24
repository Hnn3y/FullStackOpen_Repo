const App = () => {
  const now = new Date()
  const a = 10
  const b = 40
  console.log(now, a+b)





  console.log("Hello From component")
  return (
    <div>
      <p>Hello world</p>
      <Hello name = "Henneiy" />
      <Hello name = "Simon"/>
      <Hello />
    </div>
  )
}
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

export default App