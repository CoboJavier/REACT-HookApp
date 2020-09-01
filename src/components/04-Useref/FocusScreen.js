import React, { useRef } from 'react'

export const FocusScreen = () => {
    
    const inputRef = useRef()
    
    const handleClick = ()=>{
        //document.getElementById('input1').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h3>Focus Screen</h3>
            <hr/>

            <input
                id="input1"
                ref={inputRef}
                className="form-control"
                placeholder="Nombre"
            />

            <button 
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
            >
                Focus
            </button>

        </div>
    )
}
