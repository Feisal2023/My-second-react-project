import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [loadName, setLoadName] = useState("");
  const [age, setAge] = useState("");
  const [loadAge, setLoadAge] = useState("");

  // Get name function
  const getName = (event) => {
    setName(event.target.value);
  };
  // get age function
  const getAge = (event) => {
    setAge(event.target.value);
  };
  const paragraphContent = () => {
    setLoadAge(
      age === ""
        ? "and Please Enter Your Age"
        : age > 18
        ? `and your age is ${age} and it is over 18`
        : `and Your age is ${age} and it is under 18`
    );

    setLoadName(
      name !== "" ? `Your Name is ${name}` : "please Enter Your Name"
    );
  };
  return (
    <div className="App">
      <h1>Age Tracker</h1>
      <input type="text" placeholder="Enter Your Name" onChange={getName} />
      <input type="number" placeholder="Enter Your Age" onChange={getAge} />
      <button onClick={paragraphContent}>Click</button>
      <p>
        {loadName} {loadAge}
      </p>
    </div>
  );
}

export default App;
