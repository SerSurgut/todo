import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StatusFilter = () => {
        const dispatch = useDispatch()
        const {btns} = useSelector(store=>store)
                const giveDoneTasks = (e) =>{
                fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
                .then(res => res.json())
                .then(tasks => {
                        dispatch({type:"GIVE_DONE_TASKS", payload:tasks})
                        })
        }

        const giveActiveTasks = () =>{
                fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
                .then(res => res.json())
                .then(tasks => {
                        dispatch({type:"GIVE_ACTIVE_TASKS", payload:tasks})
                        })   

        }

        const giveAllTasks = () =>{
                fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
                .then(res => res.json())
                .then(tasks => {
                        dispatch({type:"ADD_TASKS", payload:tasks})
                        })

        }
    return (
        <div className="btn-group filter">
          <button type="button"
                  name="all" 
                  onClick={giveAllTasks}
                  className={btns.all?"btn btn-primary":"btn btn-outline-secondary"}>Все</button>

          <button type="button"
                  onClick={giveActiveTasks} 
                  name="active"
                  className={btns.active?"btn btn-primary":"btn btn-outline-secondary"}>Активные</button>

          <button type="button"
                  onClick={giveDoneTasks}
                  name="done"
                  className={btns.done?"btn btn-primary":"btn btn-outline-secondary"}>Завершённые</button>
        </div>
    );
};

export default StatusFilter;
