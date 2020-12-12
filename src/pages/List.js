import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Form from '../components/Form'
import ListTasks from '../components/ListTasks'

const List = () => {
const dispatch =  useDispatch()
const {tasks} = useSelector(store=>store)

 useEffect(() => {
    fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
      .then(res => res.json())
      .then(tasks => {
          dispatch({type:"ADD_TASKS", payload:tasks})
        })
        
  }, [dispatch])
 
    return (
        <div className='mt-5'>
            <h1>Список дел</h1>
        <div>
            <Form className='mt-5'/>
            <ListTasks tasks={tasks} />
        </div>
        </div>
    );
};

export default List;