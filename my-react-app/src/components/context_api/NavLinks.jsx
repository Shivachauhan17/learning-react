import {useState,useEffect} from 'react'
import UserContainer from './UserContainer'

function NavLinks({user,logout}) {
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