import {data} from '../../../data';
import React from 'react';


const UseStateArray = () => {
const [people,setPeople]=React.useState(data);
     console.log("data:",data)
    

     const removeOne=(id)=>{
        //filter function looks for a boolean flag in its callback function 
        const newPeople=people.filter((person)=>person.id!==id)
        setPeople(newPeople);
    }
     const clearAll=()=>{
        setPeople([]);
     }
    return (
        <div>
            {people.map((person)=>{
                const {id,name}=person;
                return (<div key={id}>
                    <h4>{name}</h4>
                    <button type="button" onClick={()=>removeOne(id)}>remove</button>
                </div>)
            })}
            <button type="button" style={{marginTop:'2rem'}}
            className='btn' onClick={clearAll}>clear all</button>
        </div>
    )
  };
  
  export default UseStateArray;
