import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {
    
    const {counter, increment}=useCounter(10);
    
    const [show, setShow] = useState(false);    
    
    const memoProcesoPesado=useMemo(()=>procesoPesado(counter), [counter])
    

    return (
        <div>
            <h1>MemoHook</h1>
            <h2>Counter: <small>{counter}</small> </h2>
            <hr/>
            
            <p>
                {memoProcesoPesado}
            </p>
            
            <button
            className="btn btn-primary"
            onClick={increment}
            >
                +1
            </button>

            <button
            className="btn btn-outline-primary ml-5"
            onClick={()=>{
                setShow(!show)
            }}
            >
                {JSON.stringify(show)}
            </button>



        </div>
    )
}
