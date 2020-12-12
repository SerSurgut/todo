import { ADD_TASK, GIVE_ALL_TASKS,DEL_TASK,CHANGE_TASK,GIVE_ACTIVE_TASKS,GIVE_DONE_TASKS } from "./actionType";
const defaultState = {
    tasks:[],
    newTask:[],
    btns: {
        all:true,
        done: false,
        active:false
    }
}

export function reducer(state=defaultState, action) {
    switch (action.type) {

        case ADD_TASK:
            return { ...state, 
                tasks:  state.tasks.concat([action.payload]), 
                newTask:state.newTask.concat([action.payload])
            };

        case DEL_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter(task=>task.id!==action.payload),
                newTask:state.newTask.filter(task=>task.id!==action.payload)
             };

        case CHANGE_TASK:
            return {...state, 
                tasks: state.tasks.map(task=>{
                    if (task.id!==action.payload){
                        return task
                    } else {
                        return({...task,status:!task.status})
                    }  
            }),
                newTask:state.newTask.map(task=>{
                    if (task.id!==action.payload){
                        return task
                    } else {
                        return({...task,status:!task.status})
                    }  
            })
        };

        case GIVE_ALL_TASKS:
            return { ...state,
                tasks:  action.payload, 
                btns: {all:true, done: false, active:false}};
                
        case GIVE_ACTIVE_TASKS:
            return { 
                ...state, 
                tasks: action.payload.filter(task=>task.status!==true),
                btns: {all:false, done: false, active:true}
            };

        case GIVE_DONE_TASKS:
            return {...state,
                tasks: action.payload.filter(task=>task.status!==false),
                btns: {all:false, done: true, active:false}
            };

        default:
            return state;
    }
}