import { useEffect,useState } from "react";

const MultipleReturns=()=>{
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },3000);
    },[])

    if(isLoading){
        return <h2>Loading....</h2>
    }

    return <h1>multiple returns basics</h1>
    
}

export default MultipleReturns;