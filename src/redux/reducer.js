export function reducer(state={tasks:[],newTask:[]}, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks:  state.tasks.concat([action.payload]), newTask:state.newTask.concat([action.payload])};
        case 'ADD_TASKS':
            return { ...state, tasks:  action.payload};
        case 'DEL_TASK':
            return {...state, tasks: state.tasks.filter(el=>el.id!==action.payload) };
        case 'CHANGE_TASK':
            return {...state, tasks: state.tasks.map(task=>{
                if (task.id!==action.payload){
                    return task
                } else {
                    return({
                        ...task,
                        status:!task.status
                    })
                }  
            })};
        default:
            return state;
    }
}