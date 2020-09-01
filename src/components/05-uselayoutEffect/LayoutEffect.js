import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';
import './layout.css'
export const LayoutEffect = () => {
    const {counter, increment}=useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const {author, quote} = !!data && data[0];
    
    const pTag = useRef();
    
    useLayoutEffect(() => {
       console.log(pTag.current.getBoundingClientRect()); 
    }, [quote])
    //console.log(quote);
    
    return (
        <>
        <div>
            <h1>Layout Effect</h1>
            <hr/>
          
                <blockquote className="blockquote text-right">
                <p className="mb-0"
                ref={pTag}
                >
                {quote}
                </p>
                
                </blockquote>
        
            
        </div>

        <button className="btn btn-primary" onClick={increment}>
            Siguiente
        </button>
</>

    )
}
