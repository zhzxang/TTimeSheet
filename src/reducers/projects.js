const projects =(state = [], action)=> {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return [...state,action.data];
    case 'LOAD_PROJECTS' :
      return [...action.data];
    case 'DELETE_PROJECT' :
      const newState = state.filter(p=>p.id!==action.id);
      return newState;
    case 'CLEAR_ALL':
      return [];
    default:
      return state
  }
}


export default projects