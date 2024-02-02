import { useState } from "react";


const SignUpForm = ({setToken})=>{ //when deconstructing not as prop, use "{deconstruct}"visual studio code 
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");//states
    const [error, setError] = useState(null);

    async function handleSubmit(event){
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: password
                })
        })
            const result = await response.json();
            setToken(result.token)
            console.log("result: ", result);
        } 
        catch (error) {
        setError(error.message);
        }
    }



return(
<>
    <h2>Sign Up!</h2>
    <button></button>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label>
            Username:{" "} 
            <input value={userName} 
            onChange={(e) => setUserName(e.target.value)}/>
        </label>
        <label>
            Password:{" "}
            <input type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
</>
);

}
export default SignUpForm;