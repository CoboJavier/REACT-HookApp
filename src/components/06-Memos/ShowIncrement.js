import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
    return (
        <div>
            <button
            onClick={()=>{
                increment(5);
            }}
            className="btn btn-primary"
            >
                +1
            </button>
        </div>
    )
}
)