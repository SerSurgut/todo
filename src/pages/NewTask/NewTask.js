import React from 'react';
import { useSelector } from 'react-redux';
import ListTasks from '../../components/ListTasks/ListTasks'
import './NewTask.css'

const NewTask = () => {
    const tasks = useSelector(store=>store.newTask)
    console.log(tasks);
    return (
        <>
            {
                tasks.length>0?<><h1 className="text-center title">Последние задачи</h1>
                                 <ListTasks tasks={tasks} />
                               </>:<h2 className="text-center title">Пока ничего нового ...</h2>
            }
        </>
    );
};

export default NewTask;