import React, { useReducer, useEffect } from 'react';
import './styles.css';
import { toDoReducer } from './toDoReducer';
import { useForm } from '../../hooks/useForm';


const init =()=>{
    
    return JSON.parse(localStorage.getItem('todos')) || []
    //id:new Date().getTime(),
    //descripcion:'aprender',
    //done:false
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(toDoReducer, [], init)
    
    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleSubmit=(e)=>{

        if (description.trim().length === 0) {
            return;
        }

        e.preventDefault();
        const newTodo = {
            id:new Date().getTime(),
            descripcion: description,
            done:false
        }
        const action={
            type:"add",
            payload: newTodo
        }

        dispatch(action);
        reset();
    };
    
    const handleDelete=(todoid)=>{
        //console.log(todoid);

        const action={
            type:"delete",
            payload: todoid
        }

        dispatch(action);
    }

    const handleTogle=(todoid)=>{
        dispatch({
            type:"toggle",
            payload: todoid
        })
    }
    
    
    //console.log(description)
    
    return (
        <>
        <div>
            <h1>ToDo App ({todos.length})</h1>
            <hr/>

            <div className="row">
            <div className="col-7">
            <ol className="list-group list-group-flush">
                {
                    todos.map((todo, indice)=>{
                        return <li 
                        key={todo.id}
                        className="list-group-item"
                        >
                        <p 
                        className={`${todo.done && 'complete'}`}
                        onClick={()=>handleTogle(todo.id)}
                        >
                        {indice + 1 + '.'} {todo.descripcion}
                        </p>
                        
                        <button 
                        className="btn btn-danger"
                        onClick={()=>handleDelete(todo.id)}
                        >
                            
                        Borrar
                        </button>
                        
                        
                        </li>

                    })
                }


            </ol>
            </div>

            <div className="col-5">
                <h4>Agregar ToDo</h4>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    name="description"
                    placeholder="Tarea...."
                    autoComplete="off"
                    className="form-control"
                    onChange={handleInputChange}
                    value={description}

                    />
                    <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar

                    </button>
                
                
                
                
                </form>
            
            
            
            
            </div>


            </div>


            

        </div>
    </>
    )
}
