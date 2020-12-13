import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDeleteTaskAC,fetchChangeTaskAC } from "../../redux/fetchAC";
import './ListTasks.css'

const ListTasks = ({tasks}) => {

    const dispatch= useDispatch()

    return (
        <div>
            <ul className="list-group">

                {tasks && tasks.map(task=>{
                    
                    return ( <li className="list-group-item d-flex" key={task.id}>

                                <div className="form-check form-switch">
                                    <input  className="form-check-input" 
                                            type="checkbox" 
                                            onChange={()=>dispatch(fetchChangeTaskAC({tasks:tasks, id:task.id}))} 
                                            checked={task.status?true:false}/>
                                </div>

                                <div onClick={(e)=>e.target.classList.toggle("active")} 
                                     className={'flex-grow-1 listItem'} 
                                     id={`text${task.id}`}
                                     style={task.status?{
                                         textDecoration:"line-through", 
                                         fontWeight: '600'
                                         }:null}>
                                    {task.text}
                                </div>

                                <button onClick={()=>dispatch(fetchDeleteTaskAC(task.id))}
                                        className="btn btn-outline-danger btn-sm trash"
                                        type="button">
                                        <i className="fa fa-trash-o" />
                                </button>
                            </li>)
                }).reverse()}          
            </ul>
        </div>
    );
};

export default ListTasks;