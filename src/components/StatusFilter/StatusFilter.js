import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGiveActiveTasksAC,fetchGiveDoneTasksAC,fetchGiveAllTasksAC} from '../../redux/fetchAC';
import './StatusFilter.css'

const StatusFilter = () => {
        const dispatch = useDispatch()
        const {btns} = useSelector(store=>store)
    return (
        <div className="btn-group filter">
          <button type="button"
                  name="all" 
                  onClick={()=>dispatch(fetchGiveAllTasksAC())}
                  className={btns.all?"btn btn-primary":"btn btn-outline-secondary"}>Все</button>

          <button type="button"
                  onClick={()=>dispatch(fetchGiveActiveTasksAC())}
                  name="active"
                  className={btns.active?"btn btn-primary":"btn btn-outline-secondary"}>Активные</button>

          <button type="button"
                  onClick={()=>dispatch(fetchGiveDoneTasksAC())}
                  name="done"
                  className={btns.done?"btn btn-primary":"btn btn-outline-secondary"}>Завершённые</button>
        </div>
    );
};

export default StatusFilter;
