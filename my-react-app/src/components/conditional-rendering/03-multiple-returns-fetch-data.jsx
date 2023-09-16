import  {useEffect,useState} from 'react';
const url='https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);
    const [user,setUser]=useState(null);


//********************ORDER MATTERS IN JAVASCRIPT********* */
    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const resp=await fetch(url);
                if(!resp.ok){
                    setIsError(true);
                    setIsLoading(false);
                }
                const newresp=await resp.json();
                setUser(newresp)
                console.log(user)
            }
            catch(error){
                setIsError(true);
                console.log(user);
            }
            setIsLoading(false);
            
        }
        fetchUser();
    },[]);

    if(isLoading){
        return <h2>Loading..</h2>
    }
    if(isError){
        return <h2>some error occured</h2>
    }
    //destructuring later because in beginning it is null
    //and till the user is set to some value 
    //isLoading condition will handle the control  
    const {login}=user;

    return (<h1>{login}</h1>)
}
export default MultipleReturnsFetchData;