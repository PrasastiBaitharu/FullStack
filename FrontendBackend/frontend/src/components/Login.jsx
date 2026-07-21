import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("")
    const login = async() =>{
        try {
            const res = await fetch("http://localhost:8000/api/v1/login",{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            var data = await res.json();
            
        } catch (error) {
            console.log(`Unable to send login details ${error}`)
        }
        console.log(data)
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" value={email} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" value={password} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    )
}