const current_data =(state = {}, action)=> {
  switch (action.type) {
    case 'SET_CURRENT_DATA':
      return Object.assign({},state,action.data)
    case 'REMOVE_CURRENT_DATA':
      delete state[action.key]
      return Object.assign({},state);
    default:
      return state
  }
}


export default current_data;