const current_event =(state = {}, action)=> {
  switch (action.type) {
    case 'SELECT_EVENT':
      return Object.assign({}, action.data);
    case 'LOAD_CURRENT_EVENT':
      return Object.assign({},action.data);
    case 'EDIT_CURRENT_EVENT':
      return Object.assign({},state,action.data);
    default:
      return state
  }
}


export default current_event