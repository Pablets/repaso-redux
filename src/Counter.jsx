import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './store/actions';

const Counter = () => {

    const counter = useSelector(state => state.count);
    const isLogged = useSelector(state => state.log);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Aprendiendo Redux</h1>
    <h1>Counter: {counter}</h1>
            <div className='centrado'>
                <button onClick={()=>dispatch(decrement())}>-</button>
                <button onClick={()=>dispatch(increment())}>+</button>
            </div>
        </div>
    )
}

export default Counter
