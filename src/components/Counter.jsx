import React , {useState} from "react";
import "./Counter.css";

const Counter = () =>{
    const [count,setCount] = useState(0);

    function Increment(){
        setCount(count+1)
    }

    function Decrement(){
        setCount(count-1)
    }


    return (
        <div className="Counter_container">
            <h1>Counter App</h1>
            <p>count : {count} </p>
            <div className="btn-container">
                <button onClick={Increment}>increment</button>
                <button onClick={Decrement}>decrement</button>
            </div>
        </div>
    )
}

export default Counter;