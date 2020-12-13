import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Form from '../../components/Form/Form'
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
            <Form/>

            {tasks.length>0?<>
                                <h1 className="text-center title">Список дел</h1>
                                <ListTasks tasks={tasks} />

                            </>:<h2 className="text-center title">Пока нет дел ...</h2>
            }
        </div>
    );
};

export default List;