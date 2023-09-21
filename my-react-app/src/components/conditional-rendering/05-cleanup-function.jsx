import { useEffect, useState } from "react";

const CleanupFunction=()=>{
    const [toggle,setToggle]=useState(false);


    return (
        <div>
            <button className="btn" onClick={()=>setToggle(!toggle)}>
                toogle component
            </button>
            {toggle && <RandomComponent/>}
        </div>
    );
}; 

const RandomComponent=()=>{
    useEffect(()=>{
        // console.log('hmm, this is interesting');
        // const intId=setInterval(()=>{
        //     console.log('hello from interval');
        // },1000);

        // return ()=>{
        //     clearInterval(intId);
        // };

        const someFunc=()=>{
            console.log("running again")
        }  
        window.addEventListener('scroll',someFunc);
    },[]);
    console.log('outside')
    return ()=>{window.removeEventListener('scroll')};  
}

export default CleanupFunction; 