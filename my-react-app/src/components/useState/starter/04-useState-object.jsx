   import {useState}  from "react";

const UseStateObject=()=>{
    const [person,setPerson]=useState({
        name:'peter',
        age:24,
        hobby:'read books'   
    })

    const displayPerson=()=>{
        // setPerson({
        //     name:'john',
        //     age:28,
        //     hobby:'scream at the coputer'
        // })

        setPerson({
            ...person,
            name:"john"
        })
    };
    return(
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys:{person.hobby}</h4>
            <button className="btn" onClick={displayPerson}>
                show john
            </button>
        </div>
    )
}

export default UseStateObject;