import {useState,useEffect,useContext} from 'react'
import UserContainer from './UserContainer'
// import { NavbarContext } from './Navbar';
import {useAppContext} from './Navbar';


function NavLinks() {
    const {user,logout}=useAppContext();
    return(
        <div>
  <ul>
    <li>
        <a href="#">home</a>

    </li>
    <li>
        <a href="#">profile</a>
        
    </li>
    <li>
        <a href="#">feed </a>
        
    </li>
  </ul>
  <UserContainer user={user} logout={logout}/>
  </div>
  )
}

export default NavLinks