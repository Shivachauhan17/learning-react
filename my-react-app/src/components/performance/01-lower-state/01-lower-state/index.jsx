import { useState } from 'react';
import { data } from '../../../data';
import List from './List';
import Counter from './Counter'
const LowerState = () => {
  const [people, setPeople] = useState(data);
  //initially we have the count state variable here 
  //but because as a lower state it was causing rerendering the in child components
  //so we moved it to different component
  // const [count, setCount] = useState(0);

  return (
    <section>
      <Counter/>
      <List people={people} />
    </section>
  );
};
export default LowerState;