import React,{ useState,useEffect,useContext, createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext=createContext();
console.log(NavbarContext.Provider);

//custom hook
export const useAppContext=()=>useContext(NavbarContext)




function Navbar() {

    const[user,setUser]=useState({name:"bob"})
    const logout=()=>{
        setUser(null);
    }
  return (
    <NavbarContext.Provider value={{user,logout}}>
    <nav>
        <h5>Context Api</h5>
        <NavLinks user={user} logout={logout}/>
    </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar;