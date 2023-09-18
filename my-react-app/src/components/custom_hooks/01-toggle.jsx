import  useToggle  from "./useToggle";

const ToggleExample=()=>{
    const {show,toggle}=useToggle(false);

    return(
        <div>
            <button onClick={toggle}>toggle</button> 
            {show  && <h4>some stuff</h4>}
        </div>
    )
}
export default ToggleExample;