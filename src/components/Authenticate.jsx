import { useState } from "react"


const Authenticate = ({token})=>{

    const [error,setError] = useState (null)
    const [successMessage, setSuccessMessage] = useState(null)

    const handleClick = async () => {

        try {
            const repsonse = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate",{
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`}
            })
            const result = await repsonse.json();
            setSuccessMessage(result.message);

        }   catch (error){
            setError(error.message)
        }

        console.log("authenticated!")

    }

    return(
        <>
            <h2>Authenticate!</h2>
            {successMessage ? <p>{successMessage}</p> : null}
            {error ? <p>{error}</p> : null} {/*let's try ternary operator*/}
            <button onClick={handleClick}>Authentication token</button>
        </>
    )
}
export default Authenticate