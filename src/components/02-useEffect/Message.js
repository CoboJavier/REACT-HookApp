import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coords, setCoords] = useState({x:0, y:0})

    const {x,y}=coords;

    useEffect(() => {

        const mouseMove=(e)=>{
            const coords={x: e.x, y:e.y}
            setCoords(coords)
        }

        window.addEventListener('mousemove', mouseMove);

        console.log('componente montado');
        return () => {
        window.removeEventListener('mousemove', mouseMove)
        console.log('componente desmontado');
        }
    }, [])
    
    return (
        <>
        <div> 
            <h3>{x}</h3>
            <h3>{y}</h3>

        </div>
        </>
    )
}
