import { 
    ADD_TASK, 
    DEL_TASK,
    CHANGE_TASK,
    GIVE_ALL_TASKS,
    GIVE_DONE_TASKS, 
    GIVE_ACTIVE_TASKS,
} from "./actionType";

export const addTaskAC=(payload)=>({
    type:ADD_TASK,
    payload
})
export const deleteTaskAC=(payload)=>({
    type:DEL_TASK,
    payload
})
export const changeTaskAC=(payload)=>({
    type:CHANGE_TASK,
    payload
})
export const giveAllTasksAC=(payload)=>({
    type:GIVE_ALL_TASKS,
    payload
})
export const giveDoneTasksAC=(payload)=>({
    type:GIVE_DONE_TASKS,
    payload
})
export const giveActiveTasksAC=(payload)=>({
    type:GIVE_ACTIVE_TASKS,
    payload
})