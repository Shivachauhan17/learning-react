import { useState,useEffect } from "react";

const url='https://api.github.com/users';

const FetchData=()=>{
    const [users,setUsers]=useState([]);
    console.log(users)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch(url);
                const users=await response.json();
                setUsers(users);
            }
            catch(error){
                console.log(error);
            }
        }; 
        fetchData(); 
    },[])
    console.log(users)
    
    const delUser=(id)=>{
        const newUsers=users.filter(user=>user.id!=id)
        setUsers(newUsers)
    }

    return(
        <div>
            {users.map(user=>{
                const id=user.id;
                return(
                <div key={id} >
                <h1 >{user.login}</h1>
                <button  onClick={()=>delUser(id)} >Delete User</button>
                </div>)
            })}
        </div>
    )
}

export default FetchData;