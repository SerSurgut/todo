import React from 'react';
import { useDispatch } from 'react-redux';

const ListTasks = ({tasks}) => {

const dispatch= useDispatch()
    const delTask = (id)=>{
        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${id}`, {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        dispatch({type:'DEL_TASK', payload:id})
        
    }

    const check = (Id)=>{
        const {status, id , text} = tasks.filter(el=> el.id === Id)[0]
        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${Id}`, {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            }, 
            body:JSON.stringify({
                status:!status,
                text,
                id
            })
        });
        dispatch({type:'CHANGE_TASK', payload:Id})
        return        
    }
    return (
        <div>
            <ul className="list-group">
                {tasks && tasks.map(task=>{
                    return ( <li 
                        className="list-group-item d-flex" 
                        key={task.id}>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onChange={()=>check(task.id)} checked={task.status?true:false}/>
                            </div>
                            <div className={'flex-grow-1 active'} style={task.status?{textDecoration:"line-through"}:null}>
                                {task.text}
                            </div>
                                   <button type="button" onClick={()=>delTask(task.id)}
                                            className="btn btn-outline-danger btn-sm">
                                        <i className="fa fa-trash-o" />
                                    </button>
                            </li>)
                }).reverse()}          
            </ul>
        </div>
    );
};

export default ListTasks;