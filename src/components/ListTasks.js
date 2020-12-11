import React from 'react';

const ListTasks = ({tasks}) => {
console.log(tasks);
    return (
        <div>
            <ul className="list-group">
                {tasks.map(task=>{
                    return ( <li 
                        className="list-group-item d-flex" 
                        key={task.id}>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox"/>
                            </div>
                            <div className="flex-grow-1">
                                {task.text}
                            </div>
                                   <button type="button"
                                            className="btn btn-outline-danger btn-sm">
                                        <i className="fa fa-trash-o" />
                                    </button>
                            </li>)
                })}          
            </ul>
        </div>
    );
};

export default ListTasks;