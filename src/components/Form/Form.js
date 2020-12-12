import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatusFilter from '../StatusFilter/StatusFilter'
import './Form.css'

const Form = () => {
    const dispatch = useDispatch()
    const {tasks} = useSelector(store=>store) 
    const addTask = (e)=>{
        e.preventDefault()
        const task = {
            text:e.target.text.value,
            status: false,
            id: tasks.length+1
            //Задать уникальные не получается, ограничения в mockapi
        }
        console.log(task);
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
                <input  type="text" 
                        name="text" 
                        className="form-control mr-3" 
                        placeholder="Текст..."/>
                <StatusFilter/>
            </div>
           
        </form>
        
    );
};

export default Form;