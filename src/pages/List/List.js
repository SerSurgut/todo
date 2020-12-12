import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Form from '../../components/Form/Form'
import ListTasks from '../../components/ListTasks/ListTasks'
import { giveAllTasksAC } from "../../redux/actionCreators";
import './List.css'

const List = () => {
const dispatch =  useDispatch()
const {tasks} = useSelector(store=>store)

 useEffect(() => {
    fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
      .then(res => res.json())
      .then(tasks => {
          dispatch(giveAllTasksAC(tasks))
        })
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