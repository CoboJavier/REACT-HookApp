import React from 'react'

export const Small =React.memo( ({value}) => {

    console.log('me esta llamando :)');

    return (
    <small>{value}</small>
    )
}
)