import { useState ,useCallback} from 'react';
import { data } from '../../../data';
import List from './List';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);

  const removePerson=useCallback((id)=>{
    console.log(people)
    const newPeople=people.filter((person)=> person.id!==id)
    setPeople(newPeople)
  },[people]);

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      {/* as we have passed removePerson , even if we are using memo
      this will rerender 
      to solve this issue we uses useCallback hook*/}
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};
export default LowerState;