import React from 'react';
import { useDispatch } from 'react-redux';
import './ListTasks.css'
const ListTasks = ({tasks}) => {

        const dispatch= useDispatch()
        const onClickTask =(event)=>{
            event.target.classList.toggle("active")
        }
    const delTask = (id)=>{
        console.log(id);
        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${id}`, {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        console.log(id);
        dispatch({type:'DEL_TASK', payload:id})
        
    }

    const check = (Id)=>{
        const {status, id , text} = tasks.filter(el=> el.id === Id)[0]

        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${id}`, {
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
                    return ( <li className="list-group-item d-flex" 
                                 key={task.id}>

                                <div className="form-check form-switch">

                                    <input  className="form-check-input" 
                                            type="checkbox" 
                                            onChange={()=>check(task.id)} 
                                            checked={task.status?true:false}/>
                                </div>
                                <div onClick={onClickTask} 
                                     className={'flex-grow-1 listItem'} id={`text${task.id}`}
                                     style={task.status?{textDecoration:"line-through", fontWeight: '600'}:null}>
                                    {task.text}
                                </div>
                                    <button type="button" 
                                            onClick={()=>delTask(task.id)}
                                            className="btn btn-outline-danger btn-sm trash">
                                            <i className="fa fa-trash-o" />
                                    </button>
                            </li>)
                }).reverse()}          
            </ul>
        </div>
    );
};

export default ListTasks;