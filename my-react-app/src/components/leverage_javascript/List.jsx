import {people} from '../../data'
import { Person } from './Person'
const List=()=>{
    return(
        <div>
            {
                people.map((People)=>{
                    return <Person key={People.name}{...People}/>
                })}
            
        </div>
    )
} 

export default List;