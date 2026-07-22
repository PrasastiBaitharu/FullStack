import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const getRes = async () => {
    try {
      let res = await fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          city,
        }),
      });
      var data = await res.json();
    } catch (error) {
      console.log(`Error during POST request ${error} `);
    }
    console.log(data.message);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="Enter your city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button
        onClick={() => {
          getRes();
        }}
      >
        Send
      </button>
    </>
  );
}

export default App;
