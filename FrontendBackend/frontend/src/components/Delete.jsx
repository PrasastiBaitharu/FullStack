import { useState } from "react"

export default function Delete(){
    const [email,setEmail] = useState("");
    const deleteUser = async() =>{
        try {
            const res = await fetch("http://localhost:8000/api/v1/delete",{
                method : "DELETE",
                headers:{
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    email
                })
            })
            var data = await res.json();
        } catch (error) {
            console.log(`Unable to connect with the server ${error}`);
        }
        console.log(data)
    }
    return(
        <div>
            <h1>Delete user</h1>
            <input type="text" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}