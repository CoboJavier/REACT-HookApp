import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    const {setUser} = useContext(UserContext)

    const obj={
        id: 123,
        nombre: 'javier'
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button
            className="btn btn-primary"
            onClick={()=>{
                setUser(obj)
            }}
            >
                Login
            </button>
        </div>
    )
}
