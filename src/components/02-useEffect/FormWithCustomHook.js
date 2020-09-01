import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name : '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;
    
    useEffect(()=>{
        //console.log('hey');
    }, [])

    useEffect(()=>{
        //console.log('Cambio formstate');
    }, [formValues])


    useEffect(()=>{
        console.log('Cambio email');
    }, [email])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
            <hr/>

            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Ingrese nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Ingrese email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input 
                type="text"
                name="password"
                className="form-control"
                placeholder="**********"
                value={password}
                onChange={handleInputChange}
                />
            </div>

            {(name === "123") && <Message />}
        
        <button type="submit" className="btn btn-primary">
            Guardar
        </button>
        
        </form>
    )
}
