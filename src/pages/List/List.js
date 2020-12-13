import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import StatusFilter from '../../components/StatusFilter/StatusFilter'
import ListTasks from '../../components/ListTasks/ListTasks'
import { fetchGiveAllTasksAC } from "../../redux/fetchAC";
import './List.css'

const List = () => {
const dispatch =  useDispatch()
const {tasks} = useSelector(store=>store)

 useEffect(() => {
          dispatch(fetchGiveAllTasksAC())
  }, [dispatch])
 
    return (
        <div className='mt-5'>            

                            <div className="d-flex justify-content-between align-items-baseline">                                
                                <h1 className="text-center title d-flex">Список дел</h1>
                                <StatusFilter/>
                            </div>
                               {tasks.length>0? <ListTasks tasks={tasks} />

                            :<div className="text-center titleOff">
                            <h2 className="text-center">Пока нет дел ...</h2>
                            </div>}

            
        </div>
    );
};

export default List;