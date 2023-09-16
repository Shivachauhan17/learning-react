 import { useState } from "react";

 const ShortCircuitOverview=()=>{
   // false
    const [text,setText]=useState("")
    //truthy
    const [name,setName] =useState('susan');
    
    

     
    return( <div>
        <h2>False OR :{text||'hello world'}</h2>
        <h2>Falsy and : {text && 'hello world'}</h2>
        <h2>Truthy OR:{name||'hello world'}</h2>
        <h2>Truthy and:{name && 'hello world'}</h2>
        {name && <SomeComponent name={name}/>}
        </div>
        )
 }

const SomeComponent=({name})=>{
    return(
        <div>
            <h1>whatever return</h1>
            <h2>{name}</h2>
        </div>
    )  
}


 export default ShortCircuitOverview;