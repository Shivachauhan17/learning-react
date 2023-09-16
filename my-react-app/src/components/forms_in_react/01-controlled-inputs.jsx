import { useState } from "react";

const ControlledInputs = () => {
    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handleNameChange=(e)=>{
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    return (<form>
        <h4>controlled inputs</h4>
        <div>
            <label htmlFor="name" >name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange}/>
        </div>
        <div>
            <label htmlFor="email" >email</label>
            <input type="text" id="email" value={email} onChange={handleEmailChange }/>
        </div>
        <button type="submit" onClick={(e)=>e.preventDefault()}>submit</button>
    </form>)
  };
  export default ControlledInputs;