import { 
    addTaskAC,
    deleteTaskAC, 
    changeTaskAC, 
    giveAllTasksAC,
    giveDoneTasksAC,
    giveActiveTasksAC 
} from "./actionCreators";

export const fetchGiveAllTasksAC = () =>{
    return (dispatch)=>{
            fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
            .then(res => res.json())
            .then(tasks => {
                dispatch(giveAllTasksAC(tasks))
                })  
    }
}
export const fetchAddTaskAC =(payload)=>{
    return (dispatch)=>{
        fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(payload)
            
        });
        dispatch(addTaskAC(payload))
    }
}

export const fetchDeleteTaskAC =(payload)=>{
    return (dispatch)=>{
        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${payload}`, {
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        dispatch(deleteTaskAC(payload))
    }
}

export const fetchChangeTaskAC =(payload)=>{
    const {status} = payload.tasks.filter(el=> el.id === payload.id)
    return (dispatch)=>{
        fetch(`https://5fd371a78cee610016ae04ca.mockapi.io/tasks/${payload.id}`, {
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            }, 
            body:JSON.stringify({
                status:!status,
             })
        });
        dispatch(changeTaskAC(payload.id))

    }
}

export const fetchGiveDoneTasksAC = () =>{
    return (dispatch)=>{
            fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
            .then(res => res.json())
            .then(tasks => {
                dispatch(giveDoneTasksAC(tasks))
        })  
    }
}
export const fetchGiveActiveTasksAC = () =>{
    return (dispatch)=>{
            fetch('https://5fd371a78cee610016ae04ca.mockapi.io/tasks')
            .then(res => res.json())
            .then(tasks => {
                dispatch(giveActiveTasksAC(tasks))
        })  
    }
}