import {useContext} from 'react';
// import { NavbarContext } from './Navbar';
import {useAppContext} from './Navbar';

function UserContainer() {
    const {user,logout}=useAppContext();
    
  return (
    <div>
        {user?(
            <>
            <p>Hello there,{user?.name?.toUpperCase() }</p>
        <button onClick={logout}>
            logout
        </button>
        <p>please login</p>
            </>
        ):(<p>please login</p>)}
        
    </div>
  )
}

export default UserContainer