import { useState } from "react";

export default function Update() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const updateUser = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/v1/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
        }),
      });
      var data = await res.json();
    } catch (error) {
      console.log(`Unable to connect with server ${error}`);
    }
    console.log(data);
  };
  return (
    <div>
      <h1>Update user</h1>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your new username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={updateUser}>Update</button>
    </div>
  );
}
