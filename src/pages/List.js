import React from 'react';
import Form from '../components/Form'
import ListTasks from '../components/ListTasks'

const List = () => {
const tasks = [
    {id:0, text:`Задача 1`},
    {id:0, text:`Задача 2`},
    {id:0, text:`Задача 3`},
]
    return (
        <div className='mt-5'>
            <h1>Первая</h1>
            <Form/>
            <ListTasks tasks={tasks} />

        </div>
    );
};

export default List;