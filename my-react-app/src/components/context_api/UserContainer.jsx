import {useContext} from 'react';
import { NavbarContext } from './Navbar';

function UserContainer({user,logout}) {
    const {user,logout}=useContext(NavbarContext)
    
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