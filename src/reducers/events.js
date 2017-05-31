const events =(state = [], action)=> {
  switch (action.type) {
    case 'CREATE_EVENT':
      return [...state,action.data];
    case 'LOAD_EVENTS' :
      return [...action.data];
    default:
      return state
  }
}


export default events;