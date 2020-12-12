import React from 'react';
import { useSelector } from 'react-redux';
import ListTasks from '../components/ListTasks'

const NewTask = () => {
    const tasks = useSelector(store=>store.newTask)
    console.log(tasks
        );
    return (
        <div className="mt-5">
            {
                tasks.length>0?<><h1 className="text-center">Последние задачи</h1>
                                 <ListTasks tasks={tasks} />
                               </>:<h2 className="text-center mt-5">Все по старому</h2>
            }
        </div>
    );
};

export default NewTask;