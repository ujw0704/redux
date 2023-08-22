import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "./Slice"


function Counter(){
    const dispatch = useDispatch();
    const init = useSelector((state)=>{
        return state.counter;
    })
    return (
        <>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <p>{init.counter}</p>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
      );
    }
    
    export default Counter;