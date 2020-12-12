import React from 'react';
import { useDispatch } from 'react-redux';
import StatusFilter from './StatusFilter'

const Form = () => {
    const dispatch = useDispatch()
    const addTask = (e)=>{
        e.preventDefault()
        const task = {
            id: Date.now(),
            text:e.target.text.value,
            status: false
        }
        fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(task)
            
        });
        dispatch({type:'ADD_TASK', payload:task})
        e.target.text.value = ""
    }
    
    return (
        <form onSubmit={addTask}>
            <div className="form-group mt-2  d-flex">
                <input type="text" name="text" className="form-control mr-3" placeholder="Текст..."/>
                <StatusFilter/>
            </div>
           
        </form>
        
    );
};

export default Form;