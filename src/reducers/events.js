const events =(state = [], action)=> {
  switch (action.type) {
    case 'CREATE_EVENT':
      return [...state,action.data];
    case 'EDIT_EVENT':
      return state.map((ev,key)=>{
        if(ev.id === action.id ){
          return Object.assign({},ev,action.data);
        }else{
          return ev;
        }
      })
    case 'LOAD_EVENTS' :
      return [...action.data];
    case 'ADD_HISTORY' :
      return state.map((ev,key)=>{
        if(ev.id === action.id ){
          ev.history.push(action.data);
          return Object.assign({},ev);
        }
        else{
          return ev;
        }
      })
    default:
      return state
  }
}


export default events;