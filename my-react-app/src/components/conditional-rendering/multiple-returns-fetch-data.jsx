import  {useEffect,useState} from 'react';
const url='https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(false);
    const [user,setUser]=useState(null);



    useEffect(()=>{
        const fetchUser=async()=>{
            try{
                const resp=await fetch(url);
                const user=await resp.json();
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
    return (<h1>fetch data</h1>)
}
export default MultipleReturnsFetchData;