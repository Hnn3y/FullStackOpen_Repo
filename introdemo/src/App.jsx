const App = () => {
  const now = new Date();
  const a = 10;
  const b = 40;
  console.log(now, a + b);

  const name = "Peter";
  const age = 10;

  const friends = [
    { name: "Moses", age: 13 },
    { name: "Elijah", age: 12 },
  ];

  const friend = ["MARTHA", "Maya"];

  return (
    <div>
      <p>Hello world</p>
      <Hello name="Henneiy" age={26 + 5} />
      <Hello name="Simon" age={20 + 10} />
      <Hello name={name} age={age} />

      {/* RENDERING OBJECTS */}
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>

      {/* Display array properly */}
      <p>{friend.join(", ")}</p>
    </div>
  );
};

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, are you {props.age} years old?
      </p>
    </div>
  );
};

export default App;
