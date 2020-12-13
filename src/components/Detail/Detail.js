import React, {useEffect, useState} from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Detail.css'

const Detail = () => {
    const {id} = useParams()
    const [status, setStatus] = useState({class:"notDo",text:"Еще не сделано"})
    const task = JSON.parse(localStorage.getItem(id))
    const history = useHistory();  
useEffect(()=>{
   if(task.status){
       setStatus({class:"do",text:"Выполнено"})
    }
},[status])
     return (
        <div>
            
            <h1 className="text-center title">{task&&task.title}</h1>
            <div className="shadow-sm detail-text p-4 bg-white rounded">
                <h3 className={status.class}>{status.text}</h3>
                {task&&task.text}</div>
             
              <div className="mt-5 text-center bntsGroup">
                    <button type="button" 
                            className="btn btn-outline-warning btn-lg ml-5"
                            onClick={()=>history.push('/list')}
                            >Список всех дел</button>
            </div>
        </div>
    );
};

export default Detail;