const projects =(state = [], action)=> {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return [...state,action.data];
    case 'LOAD_PROJECTS' :
      return [...action.data];
    default:
      return state
  }
}


export default projects